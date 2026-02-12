export interface Character {
  id: number;
  name: string;
  nameAr: string;
  age: number;
  personality: string;
  personalityAr: string;
  favoriteActivity: string;
  favoriteActivityAr: string;
  color: string;
  emoji: string;
  description: string;
  descriptionAr: string;
}

export const sampleCharacters: Character[] = [
  {
    id: 1,
    name: "Layla the Dreamer",
    nameAr: "ليلى الحالمة",
    age: 8,
    personality: "Creative and imaginative",
    personalityAr: "مبدعة وخيالية",
    favoriteActivity: "Drawing colorful pictures",
    favoriteActivityAr: "رسم صور ملونة",
    color: "#FF6B9D",
    emoji: "🎨",
    description: "Layla loves to paint and create magical worlds with her imagination!",
    descriptionAr: "تحب ليلى الرسم وخلق عوالم سحرية بخيالها!"
  },
  {
    id: 2,
    name: "Omar the Explorer",
    nameAr: "عمر المستكشف",
    age: 9,
    personality: "Curious and adventurous",
    personalityAr: "فضولي ومغامر",
    favoriteActivity: "Discovering new things",
    favoriteActivityAr: "اكتشاف أشياء جديدة",
    color: "#4ECDC4",
    emoji: "🔭",
    description: "Omar is always ready for a new adventure and loves learning about the world!",
    descriptionAr: "عمر دائماً مستعد لمغامرة جديدة ويحب التعلم عن العالم!"
  },
  {
    id: 3,
    name: "Fatima the Storyteller",
    nameAr: "فاطمة الراوية",
    age: 10,
    personality: "Wise and kind",
    personalityAr: "حكيمة ولطيفة",
    favoriteActivity: "Sharing wonderful tales",
    favoriteActivityAr: "مشاركة الحكايات الرائعة",
    color: "#FFE66D",
    emoji: "📚",
    description: "Fatima knows the best stories and loves to share them with friends!",
    descriptionAr: "تعرف فاطمة أفضل القصص وتحب مشاركتها مع الأصدقاء!"
  },
  {
    id: 4,
    name: "Zain the Musician",
    nameAr: "زين الموسيقي",
    age: 7,
    personality: "Joyful and rhythmic",
    personalityAr: "مرح وإيقاعي",
    favoriteActivity: "Playing beautiful melodies",
    favoriteActivityAr: "عزف الألحان الجميلة",
    color: "#A8E6CF",
    emoji: "🎵",
    description: "Zain fills the air with happy tunes and makes everyone smile!",
    descriptionAr: "يملأ زين الهواء بالألحان السعيدة ويجعل الجميع يبتسمون!"
  },
  {
    id: 5,
    name: "Noor the Scientist",
    nameAr: "نور العالمة",
    age: 9,
    personality: "Smart and inquisitive",
    personalityAr: "ذكية ومتسائلة",
    favoriteActivity: "Conducting fun experiments",
    favoriteActivityAr: "إجراء التجارب الممتعة",
    color: "#C7B9FF",
    emoji: "🔬",
    description: "Noor loves science and discovers amazing things every day!",
    descriptionAr: "تحب نور العلوم وتكتشف أشياء مذهلة كل يوم!"
  },
  {
    id: 6,
    name: "Karim the Athlete",
    nameAr: "كريم الرياضي",
    age: 8,
    personality: "Energetic and friendly",
    personalityAr: "نشيط وودود",
    favoriteActivity: "Playing sports with friends",
    favoriteActivityAr: "ممارسة الرياضة مع الأصدقاء",
    color: "#FF9999",
    emoji: "⚽",
    description: "Karim is always ready to play and loves being active outdoors!",
    descriptionAr: "كريم دائماً مستعد للعب ويحب النشاط في الهواء الطلق!"
  }
];
