export interface PhotoItem {
  id: number;
  image: string;
  title: string;
  caption: string;
  date?: string;
}

export const defaultPhotos: PhotoItem[] = [
  {
    id: 1,
    image: "/images/photo1.jpg",
    title: "Beautiful Memory",
    caption: "Salah satu kenangan terindah yang selalu membuatku tersenyum saat mengingatnya.",
    date: "A Special Moment"
  },
  {
    id: 2,
    image: "/images/photo2.jpg",
    title: "Your Sweetest Smile",
    caption: "Senyumanmu yang selalu berhasil menghangatkan dan menceriakan hariku.",
    date: "Precious Moment"
  },
  {
    id: 3,
    image: "/images/photo9.jpg",
    title: "Warm Afternoon",
    caption: "Saat-saat sederhana tapi terasa sangat berharga ketika bersamamu.",
    date: "Golden Hour"
  },
  {
    id: 4,
    image: "/images/photo4.jpg",
    title: "Kecantikanmu",
    caption: "Kecantikanmu bukan hanya di raut wajahmu — tapi di sorot matamu yang hangat, di caramu peduli, dan di cahaya yang kamu bawa ke mana pun kamu pergi.",
    date: "Simply Beautiful"
  },
  {
    id: 5,
    image: "/images/photo10.jpg",
    title: "Tuan Putriku",
    caption: "Anggun, cantik, dan selalu mempesona dalam segala situasi.",
    date: "Pure Magic"
  },
  {
    id: 6,
    image: "/images/photo6.jpg",
    title: "Little Adventures",
    caption: "Setiap tempat yang kita lalui bersama menjadi kenangan abadi.",
    date: "Togetherness"
  },
  {
    id: 7,
    image: "/images/photo8.jpg",
    title: "Peaceful Moments",
    caption: "Ketenangan yang selalu aku rasakan saat mendengarkan ceritamu.",
    date: "Sweet Serenade"
  },
  {
    id: 8,
    image: "/images/photo7.jpg",
    title: "Shining Like A Star",
    caption: "Kamu selalu bersinar dengan caramu sendiri yang begitu istimewa.",
    date: "Brightest Star"
  },
  {
    id: 9,
    image: "/images/photo3.jpg",
    title: "Cuteness Overload",
    caption: "Sisi imutmu yang selalu bikin gemas dan tidak pernah gagal menghibur.",
    date: "Forever Cute"
  },
  {
    id: 10,
    image: "/images/photo5.jpg",
    title: "Forever & Always",
    caption: "Perjalanan indah kita yang akan terus terukir dengan rasa penuh kasih.",
    date: "Infinite Love"
  }
];

export const getPhotosData = (): PhotoItem[] => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("lily_photos_data");
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
  }
  return defaultPhotos;
};
