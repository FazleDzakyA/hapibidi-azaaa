# 🌸 Premium Cinematic Birthday Website for Azalia Fitriani (Lily)

Sebuah platform digital birthday experience yang dibuat khusus dengan perpaduan desain **Romantic Luxury**, animasi sinematik, efek glassmorphism, galeri foto interaktif, surat cinta romantis, hingga mini game dan kamar rahasia.

---

## 📌 Informasi Spesial

- **Nama**: Azalia Fitriani
- **Panggilan**: Lily 🌸 / Tuan Putriku
- **Tanggal Spesial**: 10 Oktober 2026
- **Password Secret Room**: `LILY10102026`
- **Password Admin Panel**: `LILYADMIN2026`

---

## ✨ Fitur-Fitur Utama

1. **Audio Start & Cinematic Opening**:
   - Overlay konfirmasi awal: *"Are You Ready For A Little Surprise? 🌸"*
   - Pengalaman pembuka seperti film romantis dengan sequence teks, bintang gemerlap, bulan glowing, serta animasi kelopak bunga lily yang bermekaran.

2. **Hero Section & Dynamic Birthday Countdown**:
   - Foto hero Lily di dalam frame lingkaran melayang ber-aura.
   - Hitung mundur interaktif menuju **10 Oktober 2026** (Hari, Jam, Menit, Detik).
   - Efek kembang api/confetti otomatis ketika mencapai tanggal 10 Oktober.

3. **Story Timeline ("A Little Story Behind This")**:
   - Perjalanan cerita dari *Chapter 01 (The Idea)* hingga *Chapter 04 (The Surprise)* dengan animasi garis waktu scroll reveal.

4. **Things I Love About You (12 Cards)**:
   - 12 kartu interaktif dengan efek rotasi 3D flip card untuk menemukan alasan-alasan manis menyayangi Lily.

5. **Photo Gallery & Polaroid Memory Wall**:
   - **Tepat 10 Foto** berdesain *Apple Photos / Pinterest Layout*.
   - Mode Lightbox Fullscreen dengan navigasi panah, swipe, serta deskripsi foto.
   - Polaroid Memory Wall dengan efek rotasi halus yang menjadi lurus saat di-hover.
   - *Error Handling*: Jika foto belum dimasukkan, tampil fallback elegan *"Memory will be added soon 🌸"*.

6. **Love Letter ("A Letter For Lily 💌")**:
   - Animasi surat amplop romantis yang dapat dibuka saat diklik, dengan typography *Dancing Script / Great Vibes*.

7. **Virtual 3D Gift Box ("One More Surprise 🎁")**:
   - Kotak hadiah 3D yang bergetar dan terbuka mengeluarkan ledakan confetti, bunga lily, serta pesan manis.

8. **Star Wishes ("A Sky Full Of Wishes ⭐")**:
   - Langit malam interaktif berisi **100 Bintang**. Diklik untuk membuka kartu ucapan/harapan manis.

9. **Tap My Heart Counter (❤️)**:
   - Penghitung interaktif dengan partikel hati terbang. Counter bertambah hingga simbol `∞` dengan pesan *"My love for you cannot be counted."*

10. **Mini Game ("Catch The Lily 🌸")**:
    - Permainan menangkap 30 kelopak bunga lily jatuh dari langit untuk membuka ucapan selamat ulang tahun.

11. **Secret Room (`/secret`)**:
    - Tombol rahasia *"Don't Click Me"* dengan teks lucu *"Aku tahu kamu pasti klik 😄"* dan autentikasi password `LILY10102026`.

12. **Admin Panel Dashboard (`/admin`)**:
    - Login password `LILYADMIN2026` untuk mengubah **10 Foto**, **Surat Cinta**, **Timeline**, **100 Bintang**, dan **Musik** tanpa perlu mengubah kode utama.

13. **Final Ending ("Before You Leave 🌙")**:
    - Sequence sinematik penutup dengan penegasan cinta, tombol *"Replay This Memory"*, dan footer minimalis.

---

## 🛠️ Panduan Kustomisasi Aset

Semua aset dan teks website dapat diganti secara sangat mudah:

### 1. Mengganti 10 Foto
Letakkan 10 file foto Lily di folder:
```text
/public/images/photo1.jpg
/public/images/photo2.jpg
...
/public/images/photo10.jpg
```

### 2. Mengganti Musik Utama
Ganti file lagu pada:
```text
/public/music/until-i-found-you.mp3
```
*(Lagu default: Until I Found You - Stephen Sanchez)*

### 3. Mengubah Teks & Konten via Admin Panel
Buka halaman admin di browser:
```text
http://localhost:3000/admin
```
Masukkan password: `LILYADMIN2026`. Anda dapat mengedit judul foto, caption, isi surat cinta, timeline, dan ucapan bintang secara langsung dari browser!

---

## 🚀 Cara Menjalankan Project

### Prerequisites
- Node.js (v18+)
- npm / yarn / pnpm

### Jalankan Server Development
```bash
npm run dev
```
Buka browser di `http://localhost:3000`.

### Build untuk Produksi
```bash
npm run build
npm start
```

---

## 🌐 Cara Deploy (Vercel / Netlify)

1. Push folder project ini ke repository GitHub.
2. Buka [Vercel](https://vercel.com) atau [Netlify](https://netlify.com).
3. Import repository project `birthday-lily`.
4. Klik **Deploy**! Website akan langsung live dalam beberapa detik.

---

*Made with ❤️ especially for Azalia Fitriani (Lily 🌸) — 10 October 2026*
