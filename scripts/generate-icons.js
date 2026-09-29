const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgBuffer = fs.readFileSync(path.join(__dirname, '../public/icons/icon.svg'));
const iconsDir = path.join(__dirname, '../public/icons');
const screenshotsDir = path.join(__dirname, '../public/screenshots');

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

async function generate() {
  // Generate 192x192 PNG icon
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(iconsDir, 'icon-192.png'));

  // Generate 512x512 PNG icon
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(iconsDir, 'icon-512.png'));

  // Generate 512x512 Maskable PNG icon
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(iconsDir, 'maskable-512.png'));

  // Generate desktop screenshot placeholder (1280x720)
  await sharp({
    create: {
      width: 1280,
      height: 720,
      channels: 4,
      background: { r: 15, g: 23, b: 42, alpha: 1 }
    }
  })
  .composite([{ input: await sharp(svgBuffer).resize(200, 200).toBuffer(), gravity: 'center' }])
  .png()
  .toFile(path.join(screenshotsDir, 'desktop.png'));

  // Generate mobile screenshot placeholder (750x1334)
  await sharp({
    create: {
      width: 750,
      height: 1334,
      channels: 4,
      background: { r: 15, g: 23, b: 42, alpha: 1 }
    }
  })
  .composite([{ input: await sharp(svgBuffer).resize(180, 180).toBuffer(), gravity: 'center' }])
  .png()
  .toFile(path.join(screenshotsDir, 'mobile.png'));

  console.log('✅ PWA PNG icons and screenshots generated successfully!');
}

generate().catch(console.error);
