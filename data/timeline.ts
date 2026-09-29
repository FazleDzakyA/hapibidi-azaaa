export interface TimelineItem {
  id: number;
  chapter: string;
  title: string;
  content: string;
}

export const defaultTimeline: TimelineItem[] = [
  {
    id: 1,
    chapter: "Chapter 01",
    title: "The Idea",
    content: "Aku ingin membuat sesuatu yang benar-benar berbeda dan istimewa untuk seseorang yang sangat berharga dalam hidupku."
  },
  {
    id: 2,
    chapter: "Chapter 02",
    title: "The Design",
    content: "Setiap warna soft pink, efek glowing, animasi kelopak bunga lily, dan setiap detail visual dipilih sambil senantiasa memikirkanmu."
  },
  {
    id: 3,
    chapter: "Chapter 03",
    title: "The Song",
    content: "Lagu 'Until I Found You' menjadi melodi pengiring manis dari cerita kecil yang dirancang khusus untuk mewarnai harimu."
  },
  {
    id: 4,
    chapter: "Chapter 04",
    title: "The Surprise",
    content: "Dan akhirnya, tempat digital romantis ini selesai dibuat hanya untuk Azalia Fitriani — Tuan Putriku tercinta."
  }
];

export const getTimelineData = (): TimelineItem[] => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("lily_timeline_data");
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
  }
  return defaultTimeline;
};
