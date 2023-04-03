const COLORS = {
  transmutation: {
    "text-white": "#eaddd7",
    "text-gray-300": "#ddd6fe",
    "bg-gray-900": "#43302b",
    "bg-gray-800": "#846358",
    "bg-gray-700": "#977669",
    "border-gray-700/50": "rgba(151, 118, 105, 0.5)",
    "bg-slate-800": "#5b21b6",
    "bg-slate-700": "#6d28d9",
    "bg-slate-600/50": "rgba(124, 58, 237, 0.5)",
    "border-slate-700": "#a78bfa",
    "border-slate-400": "#a78bfa",
  },
  potions: {
    "text-white": "#eaddd7",
    "text-slate-300": "#86efac",
    "bg-gray-900": "#43302b",
    "bg-gray-800": "#846358",
    "bg-gray-700": "#977669",
    "border-gray-700/50": "rgba(151, 118, 105, 0.5)",
    "bg-slate-800": "#166534",
    "bg-slate-700": "#15803d",
    "bg-slate-600/50": "rgba(124, 58, 237, 0.5)",
    "border-slate-700": "#15803d",
    "border-slate-400": "#4ade80",
  },
  botanics: {
    "text-white": "#bbf7d0",
    "text-slate-300": "#bef264",
    "bg-gray-900": "#14532d",
    "bg-gray-800": "#166534",
    "bg-gray-700": "#15803d",
    "border-gray-700/50": "rgba(21, 128, 61, 0.5)",
    "bg-slate-800": "#3f6212",
    "bg-slate-700": "#4d7c0f",
    "bg-slate-600/50": "rgba(101, 163, 13, 0.5)",
    "border-slate-700": "#4d7c0f",
    "border-slate-400": "#a3e635",
  },
  artifice: {
    "text-white": "#e9d5ff",
    "text-gray-300": "#c4b5fd",
    "bg-gray-900": "#581c87",
    "bg-gray-800": "#6b21a8",
    "bg-gray-700": "#7e22ce",
    "border-gray-700/50": "rgba(151, 118, 105, 0.5)",
    "bg-slate-800": "#5b21b6",
    "bg-slate-700": "#6d28d9",
    "bg-slate-600/50": "rgba(124, 58, 237, 0.5)",
    "border-slate-700": "#a78bfa",
    "border-slate-400": "#a78bfa",
  },
};

const SKILLS = {
  athletics: "Atletyka",
  characterisation: "Charakteryzacja",
  determination: "Determinacja",
  empathy: "Empatia",
  intuition: "Intuicja",
  "animal-handling": "Opieka nad Zwierzętami",
  "magic-talent": "Zdolności Magiczne",
  medicine: "Medycyna",
  might: "Siła",
  devotion: "Oddanie",
  guile: "Przekonywanie",
  reflexes: "Refleks",
  craft: "Rzemiosło",
  concealment: "Ukrywanie",
  perception: "Spostrzegawczość",
  theology: "Teologia",
  "ballistic-skills": "Umiejętności Strzeleckie",
  "weapon-skills": "Walka Wręcz",
  "arcane-lore": "Wiedza Magiczna",
  "nature-lore": "Wiedza o Przyrodzie",
  "common-knowledge": "Wiedza ogólna",
  fortitude: "Wytrzymałość",
  intimidation: "Zastraszanie",
  dexterity: "Zręczność",
};

const TALENTS = {};

const MAGIC_TYPES = {
  alchemy: {
    name: "Alchemia",
    subtypes: {
      potions: "Warzenie Mikstur",
      transmutation: "Transmutacja",
    },
  },
  botanics: {
    name: "Botanika",
  },
  elemental: {
    name: "Magia Żywiołów",
    subtypes: {
      water: "Magia Wody",
      earth: "Magia Ziemi",
      fire: "Magia Ognia",
      air: "Magia Powietrza",
    },
  },
  artifice: {
    name: "Tworzenie Artefaktów",
  },
  sanctum: {
    name: "Magia Sakralna",
    subtypes: {
      sanctum: "Magia Sakralna",
      exorcisms: "Egzorcyzmy",
    },
  },
  "mana-source": {
    name: "Źródło Mocy",
  },
};

const RACES = {
  human: "Człowiek",
  elf: "Elf",
  feles: "Feles",
  naga: "Lamia",
  angel: "Anioł",
};

const RACIAL_SKILLS = {
  human: {
    determination: 1,
    intuition: 1,
  },
  elf: {
    "magic-talent": 1,
    dexerity: 1,
    reflexes: 1,
  },
  feles: {
    reflexes: 1,
    concealment: 1,
    perception: 1,
    "nature-lore": 1,
    dexerity: 1,
  },
  naga: {
    reflexes: 1,
    "ballistic-skills": 1,
    "weapon-skills": 1,
  },
  angel: {
    devotion: 1,
    reflexes: 1,
  },
};

const RACIAL_TALENTS = {
  human: {
    "technological-aptitude": 1,
    "free-talent": 2,
  },
  elf: {
    "sensitive-senses_hearing": 1,
    "magic-aptitude": 1,
    "magic-sense": 1,
  },
  feles: {
    "unity-with-nature": 1,
    "sensitive-senses_hearing": 1,
    "sensitive-senses_seeing": 1,
  },
  naga: {
    oppurtunistic: 1,
    "combat-ready": 1,
    "magical-resistance": 1,
  },
  angel: {
    blessed_jahwe: 1,
    flight: 1,
    "holy-origin": 1,
  },
};
