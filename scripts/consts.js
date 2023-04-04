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
    "bg-slate-600": "#7c3aed",
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
    "bg-slate-600": "#16a34a",
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
    "bg-slate-600": "#7c3aed",
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

const FORBIDDEN_LORE = {
  ...MAGIC_TYPES,
  "arcane-lore": {
    name: "Magia",
  },
  "abyssal-lore": {
    name: "Otchłań",
  },
  "crimson-cult-lore": {
    name: "Szkarłatny Kult",
  },
};

const SENSES = {
  sight: {
    name: "Wzrok",
  },
  hearing: {
    name: "Słuch",
  },
  smell: {
    name: "Węch",
  },
  taste: {
    name: "Smak",
  },
  touch: {
    name: "Dotyk",
  },
};

const RACES = {
  human: "Człowiek",
  elf: "Elf",
  feles: "Feles",
  naga: "Lamia",
  angel: "Anioł",
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

const TALENTS = {
  "magic-discipline": {
    name: "Dyscyplina Magiczna",
    description:
      "Jeżeli rzucasz zaklęcie obszarowe, możesz wybrać osoby, na które to zaklęcie nie będzie miało wpływu. Maksymalna liczba osób, które mogą zostać w ten sposób wybrane, jest równa poziomowi Umiejętności Zdolności Magiczne. Jeżeli jednak zaklęcie to powoduje czasową zmianę danego obszaru (jak np. Podpalenie), osoby, które zostaną wybrane dzięki temu Talentowi otrzymają obrażenia, o ile nie wyjdą z danego obszaru do Twojej następnej tury.",
  },
  "sensitive-senses": {
    name: "Czuły Zmysł",
    description:
      "Jeden z Twoich zmysłów jest szczególnie rozwinięty. Wybierz jeden ze zmysłów (wzrok, słuch, dotyk, smak, węch). Jeśli wykonujesz test na Spostrzegawczość z użyciem danego zmysłu, wartość Umiejętności Spostrzegawczość zostaje podwojona przy tym rzucie.",
    types: SENSES,
  },
  "armour-of-faith": {
    name: "Pancerz Wiary",
    requirements:
      "Dziedzina Magii (Magia Sakralna), Dusza (3), Ciało (4), Oddanie (4) lub Rasa (Anioł/Anielica)",
    description: "Możesz rzucać zaklęcia będąc w zbroi Średniej lub Ciężkiej.",
  },
  "master-of-magic": {
    name: "Mistrz Magii",
    requirements: "Tytuł (Mistrz Magii)",
    description:
      "Przy rzutach związanych z daną Dziedziną Magii liczba Kości otrzymywana we wszystkich Umiejętnościach zostaje podwojona.\n\nTen Talent może zostać wybrane dla maksymalnie dwóch Dziedzin Magii, ale nie może być wybrany dla tej samej Dziedziny Magii więcej niż raz. Jedynie Dziedziny Magii Wysokiej mogą być wybrane dla tego Talentu.",
    types: MAGIC_TYPES,
  },
  "forbidden-lore": {
    name: "Zakazana Wiedza",
    requirements:
      "Umysł (3), Wiedza Magiczna (4), co najmniej 5 Punktów Obłędu",
    description:
      "Liczba kości dla wybranej Umiejętności przy rzutach związanych z daną dziedziną jest podwajana. Jeśli pomimo tego Test się nie uda, musisz liczyć się z groźnymi konsekwencjami…",
    types: FORBIDDEN_LORE,
  },
  blessed: {
    name: "Błogosławieństwo",
    requirements: "Dusza (2), Oddanie (2) lub Rasa (Anioł/Anielica)",
    description:
      "Wymagane do Magii Sakralnej oraz modlitw.\nZostałeś/aś pobłogosławiony/a przez wybrane bóstwo i możesz wykorzystywać zaklęcia z dziedziny Magii Sakralnej.",
  },
  "magical-senses": {
    name: "Magiczny Zmysł",
    description:
      'Masz wrodzony dar do wykrywania i obrazowania otaczającej Cię magii, jej ukierunkowania oraz efektu. Testy na opieranie się efektowi zaklęć i na rozplatanie zaklęć wymagają jednego sukcesu mniej. Ponadto wybierasz, którym zmysłem "widzisz" magię (wzrok - wstęgi w powietrzu, dotyk - drżenie w palcach o różnym natężeniu i częstotliwości, słuch - różne dźwięki itd.).',
    types: SENSES,
  },
  "dispel-magic": {
    name: "Rozplatanie Zaklęć",
    requirements: "Zdolności Magiczne (4)",
    description:
      "Każdy mag posiadający ten Talent może raz na rundę za darmo dokonać próby rozplatania, jednak dane zaklęcie może być rozplatane wyłącznie raz.\nMagowie posiadający Zapał mogą próbować rozpleść więcej zaklęć - każda następna taka próba kosztuje jeden punkt Zapału.\nJeżeli Postać widzi istotę rzucającą zaklęcie i jest od niej w zasięgu 20 m, może zadeklarować, że próbuje rozpleść rzucane zaklęcie. Postać wykonuje Test Magii. Jeżeli wynik Testu Postaci będzie wyższy niż wynik Testu przeciwnika, zaklęcie zostaje rozplecione, w innym wypadku trzeba liczyć się z konsekwencjami…",
  },
  "unbreakable-spells": {
    name: "Niezniszczalne Zaklęcia",
    requirements: "Zdolności Magiczne (4)",
    description:
      "Ilość Sukcesów wymaganych do rozplecenia zaklęcia rzuconego przez Ciebie jest zwiększona o 1 za każdy poziom w Umiejętności Zdolności Magiczne.",
  },
  "combat-ready": {
    name: "Gotowość do Walki",
    description:
      "Nie możesz zostać zaskoczony(a) podczas walki oraz otrzymujesz bonus w postaci 2 punktów do Inicjatywy. Ten Talent możesz wykupić wielokrotnie, za każdym razem zwiększając swoją Inicjatywę o 2 punkty.",
  },
  diplomat: {
    name: "Dyplomata",
    requirements: "Dusza (3), Empatia (3), Przekonywanie (3)",
    description:
      "Masz Przewagę na wszystkie Przeciwstawne rzuty gdy starasz się rozwiązać konflikt, ocenić emocje i zamiary innych bądź określić, czy inni kłamią. Ponadto jesteś szanowany(a) i większość osób będzie się zwracała do Ciebie z szacunkiem, nawet jeśli za Tobą nie przepadają.",
  },
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
    "sensitive-senses/hearing": 1,
    "magic-aptitude": 1,
    "magic-sense": 1,
  },
  feles: {
    "unity-with-nature": 1,
    "sensitive-senses/hearing": 1,
    "sensitive-senses/sight": 1,
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
