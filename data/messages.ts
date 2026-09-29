export interface StarMessage {
  id: number;
  text: string;
  category?: string;
}

const wishes = [
  "Semoga kamu selalu bahagia setiap hari 🌸",
  "Jangan pernah lupa betapa berharganya dirimu ✨",
  "Semoga senyummu selalu punya alasan untuk bertahan 😊",
  "Aku berharap semua impian indahmu segera terwujud 💫",
  "Semoga hari-harimu selalu dipenuhi kehangatan dan rasa tenang 🕊️",
  "Kamu adalah hal terbaik yang pernah hadir 💕",
  "Semoga langkahmu selalu dilindungi dan dimudahkan 💖",
  "Senyummu adalah pemandangan terindah di dunia 🌸",
  "Semoga dunia selalu bersikap lembut kepadamu ✨",
  "Terima kasih sudah menjadi Lily yang luar biasa 🌺",
  "Semoga kamu tidak pernah merasa sendirian 🤗",
  "Setiap detik bersamamu adalah anugerah terindah 💖",
  "Semoga kesehatan dan kedamaian selalu menyertaimu 🌿",
  "Tetaplah bersinar seperti bintang di langit malam ⭐",
  "Hati baikmu pantas mendapatkan segala kebahagiaan 💝",
  "Semoga semua lelahmu berganti menjadi kebahagiaan manis 🌸",
  "Kamu adalah alasan di balik senyuman indah ini 🌹",
  "Semoga harimu selalu seindah bunga lily yang mekar ✨",
  "Jangan ragu untuk bermimpi setinggi bintang ⭐",
  "Aku bangga melihat setiap pencapaian dan usahamu 💖"
];

export const defaultMessages: StarMessage[] = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  text: wishes[i % wishes.length] + (i >= wishes.length ? ` (#${i + 1})` : ""),
}));

export const getMessagesData = (): StarMessage[] => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("lily_messages_data");
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
  }
  return defaultMessages;
};
