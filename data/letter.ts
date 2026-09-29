export interface LetterConfig {
  title: string;
  salutation: string;
  paragraphs: string[];
  closing: string;
  signature: string;
}

export const defaultLetter: LetterConfig = {
  title: "A Letter For Lily 💌",
  salutation: "Hi Lily 🌸",
  paragraphs: [
    "Selamat ulang tahun yang ke-spesial!",
    "Aku membuat tempat kecil ini bukan sekadar ingin menunjukkan sesuatu yang megah, tapi karena aku ingin memberikan hadiah yang dibuat secara tulus dengan waktu, pikiran, dan segenap perasaanku.",
    "Setiap perpaduan warna soft pink & lavender, setiap animasi bunga lily yang bermekaran, dan setiap detail di sini ditulis sambil mengingat momen-momen manis bersamamu.",
    "Terima kasih sudah hadir dan menjadi seseorang yang begitu berharga serta selalu membawa kehangatan di sekitarmu.",
    "Semoga di usiamu yang baru ini, kamu selalu dikelilingi kebahagiaan, kesehatan, rasa tenang, senyuman manis, dan impian-impian besar yang perlahan terwujud.",
    "Tetaplah menjadi Lily yang baik hati, penuh keceriaan, dan selalu bersinar terang."
  ],
  closing: "Happy Birthday, Tuan Putriku.",
  signature: "Dengan segenap rasa & kasih 💖"
};

export const getLetterData = (): LetterConfig => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("lily_letter_data");
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
  }
  return defaultLetter;
};
