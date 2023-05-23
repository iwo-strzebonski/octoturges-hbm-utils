export const COLORS = {
  transmutation: {
    'text-white': '#eaddd7',
    'text-gray-300': '#ddd6fe',
    'bg-gray-900': '#43302b',
    'bg-gray-800': '#846358',
    'bg-gray-700': '#977669',
    'border-gray-700/50': 'rgba(151, 118, 105, 0.5)',
    'bg-slate-800': '#5b21b6',
    'bg-slate-700': '#6d28d9',
    'bg-slate-600': '#7c3aed',
    'border-slate-700': '#a78bfa',
    'border-slate-400': '#a78bfa'
  },
  potions: {
    'text-white': '#eaddd7',
    'text-slate-300': '#86efac',
    'bg-gray-900': '#43302b',
    'bg-gray-800': '#846358',
    'bg-gray-700': '#977669',
    'border-gray-700/50': 'rgba(151, 118, 105, 0.5)',
    'bg-slate-800': '#166534',
    'bg-slate-700': '#15803d',
    'bg-slate-600': '#16a34a',
    'border-slate-700': '#15803d',
    'border-slate-400': '#4ade80'
  },
  botanics: {
    'text-white': '#bbf7d0',
    'text-slate-300': '#bef264',
    'bg-gray-900': '#14532d',
    'bg-gray-800': '#166534',
    'bg-gray-700': '#15803d',
    'border-gray-700/50': 'rgba(21, 128, 61, 0.5)',
    'bg-slate-800': '#3f6212',
    'bg-slate-700': '#4d7c0f',
    'bg-slate-600': '#7c3aed',
    'border-slate-700': '#4d7c0f',
    'border-slate-400': '#a3e635'
  },
  artifice: {
    'text-white': '#e9d5ff',
    'text-gray-300': '#c4b5fd',
    'bg-gray-900': '#581c87',
    'bg-gray-800': '#6b21a8',
    'bg-gray-700': '#7e22ce',
    'border-gray-700/50': 'rgba(151, 118, 105, 0.5)',
    'bg-slate-800': '#5b21b6',
    'bg-slate-700': '#6d28d9',
    'bg-slate-600/50': 'rgba(124, 58, 237, 0.5)',
    'border-slate-700': '#a78bfa',
    'border-slate-400': '#a78bfa'
  }
}

export const MAGIC_TYPES = {
  'alchemy': {
    name: 'Alchemia',
    subtypes: {
      potions: 'Warzenie Mikstur',
      transmutation: 'Transmutacja'
    }
  },
  'botanics': {
    name: 'Botanika'
  },
  'elemental': {
    name: 'Magia Żywiołów',
    subtypes: {
      water: 'Magia Wody',
      earth: 'Magia Ziemi',
      fire: 'Magia Ognia',
      air: 'Magia Powietrza'
    }
  },
  'artifice': {
    name: 'Tworzenie Artefaktów'
  },
  'sanctum': {
    name: 'Magia Sakralna',
    subtypes: {
      sanctum: 'Magia Sakralna',
      exorcisms: 'Egzorcyzmy'
    }
  },
  'mana-source': {
    name: 'Źródło Mocy'
  }
}

export const FORBIDDEN_LORE = {
  ...MAGIC_TYPES,
  'arcane-lore': {
    name: 'Magia'
  },
  'abyssal-lore': {
    name: 'Otchłań'
  },
  'crimson-cult-lore': {
    name: 'Szkarłatny Kult'
  }
}

export const SENSES = {
  sight: {
    name: 'Wzrok'
  },
  hearing: {
    name: 'Słuch'
  },
  smell: {
    name: 'Węch'
  },
  taste: {
    name: 'Smak'
  },
  touch: {
    name: 'Dotyk'
  }
}

export const RACES = {
  human: 'Człowiek',
  elf: 'Elf',
  feles: 'Feles',
  naga: 'Lamia',
  angel: 'Anioł'
}

export const SKILLS = {
  'athletics': 'Atletyka',
  'characterisation': 'Charakteryzacja',
  'determination': 'Determinacja',
  'empathy': 'Empatia',
  'intuition': 'Intuicja',
  'animal-handling': 'Opieka nad Zwierzętami',
  'magic-talent': 'Zdolności Magiczne',
  'medicine': 'Medycyna',
  'might': 'Siła',
  'devotion': 'Oddanie',
  'guile': 'Przekonywanie',
  'reflexes': 'Refleks',
  'craft': 'Rzemiosło',
  'concealment': 'Ukrywanie',
  'perception': 'Spostrzegawczość',
  'theology': 'Teologia',
  'ballistic-skills': 'Umiejętności Strzeleckie',
  'weapon-skills': 'Walka Wręcz',
  'arcane-lore': 'Wiedza Magiczna',
  'nature-lore': 'Wiedza o Przyrodzie',
  'common-knowledge': 'Wiedza ogólna',
  'fortitude': 'Wytrzymałość',
  'intimidation': 'Zastraszanie',
  'dexterity': 'Zręczność'
}

export const TALENTS = {
  'magic-discipline': {
    name: 'Dyscyplina Magiczna',
    description:
      'Jeżeli rzucasz zaklęcie obszarowe, możesz wybrać osoby, na które to zaklęcie nie będzie miało wpływu. Maksymalna liczba osób, które mogą zostać w ten sposób wybrane, jest równa poziomowi Umiejętności Zdolności Magiczne. Jeżeli jednak zaklęcie to powoduje czasową zmianę danego obszaru (jak np. Podpalenie), osoby, które zostaną wybrane dzięki temu Talentowi otrzymają obrażenia, o ile nie wyjdą z danego obszaru do Twojej następnej tury.'
  },
  'sensitive-senses': {
    name: 'Czuły Zmysł',
    description:
      'Jeden z Twoich zmysłów jest szczególnie rozwinięty. Wybierz jeden ze zmysłów (wzrok, słuch, dotyk, smak, węch). Jeśli wykonujesz test na Spostrzegawczość z użyciem danego zmysłu, wartość Umiejętności Spostrzegawczość zostaje podwojona przy tym rzucie.',
    types: SENSES
  },
  'armour-of-faith': {
    name: 'Pancerz Wiary',
    requirements: 'Dziedzina Magii (Magia Sakralna), Dusza (3), Ciało (4), Oddanie (4) lub Rasa (Anioł/Anielica)',
    description: 'Możesz rzucać zaklęcia będąc w zbroi Średniej lub Ciężkiej.'
  },
  'master-of-magic': {
    name: 'Mistrz Magii',
    requirements: 'Tytuł (Mistrz Magii)',
    description:
      'Przy rzutach związanych z daną Dziedziną Magii liczba Kości otrzymywana we wszystkich Umiejętnościach zostaje podwojona.\n\nTen Talent może zostać wybrane dla maksymalnie dwóch Dziedzin Magii, ale nie może być wybrany dla tej samej Dziedziny Magii więcej niż raz. Jedynie Dziedziny Magii Wysokiej mogą być wybrane dla tego Talentu.',
    types: MAGIC_TYPES
  },
  'forbidden-lore': {
    name: 'Zakazana Wiedza',
    requirements: 'Umysł (3), Wiedza Magiczna (4), co najmniej 5 Punktów Obłędu',
    description:
      'Liczba kości dla wybranej Umiejętności przy rzutach związanych z daną dziedziną jest podwajana. Jeśli pomimo tego Test się nie uda, musisz liczyć się z groźnymi konsekwencjami…',
    types: FORBIDDEN_LORE
  },
  'blessed': {
    name: 'Błogosławieństwo',
    requirements: 'Dusza (2), Oddanie (2) lub Rasa (Anioł/Anielica)',
    description:
      'Wymagane do Magii Sakralnej oraz modlitw.\nZostałeś/aś pobłogosławiony/a przez wybrane bóstwo i możesz wykorzystywać zaklęcia z dziedziny Magii Sakralnej.'
  },
  'magical-senses': {
    name: 'Magiczny Zmysł',
    description:
      'Masz wrodzony dar do wykrywania i obrazowania otaczającej Cię magii, jej ukierunkowania oraz efektu. Testy na opieranie się efektowi zaklęć i na rozplatanie zaklęć wymagają jednego sukcesu mniej. Ponadto wybierasz, którym zmysłem "widzisz" magię (wzrok - wstęgi w powietrzu, dotyk - drżenie w palcach o różnym natężeniu i częstotliwości, słuch - różne dźwięki itd.).',
    types: SENSES
  },
  'dispel-magic': {
    name: 'Rozplatanie Zaklęć',
    requirements: 'Zdolności Magiczne (4)',
    description:
      'Każdy mag posiadający ten Talent może raz na rundę za darmo dokonać próby rozplatania, jednak dane zaklęcie może być rozplatane wyłącznie raz.\nMagowie posiadający Zapał mogą próbować rozpleść więcej zaklęć - każda następna taka próba kosztuje jeden punkt Zapału.\nJeżeli Postać widzi istotę rzucającą zaklęcie i jest od niej w zasięgu 20 m, może zadeklarować, że próbuje rozpleść rzucane zaklęcie. Postać wykonuje Test Magii. Jeżeli wynik Testu Postaci będzie wyższy niż wynik Testu przeciwnika, zaklęcie zostaje rozplecione, w innym wypadku trzeba liczyć się z konsekwencjami…'
  },
  'unbreakable-spells': {
    name: 'Niezniszczalne Zaklęcia',
    requirements: 'Zdolności Magiczne (4)',
    description:
      'Ilość Sukcesów wymaganych do rozplecenia zaklęcia rzuconego przez Ciebie jest zwiększona o 1 za każdy poziom w Umiejętności Zdolności Magiczne.'
  },
  'combat-ready': {
    name: 'Gotowość do Walki',
    description:
      'Nie możesz zostać zaskoczony(a) podczas walki oraz otrzymujesz bonus w postaci 2 punktów do Inicjatywy. Ten Talent możesz wykupić wielokrotnie, za każdym razem zwiększając swoją Inicjatywę o 2 punkty.'
  },
  'diplomat': {
    name: 'Dyplomata',
    requirements: 'Dusza (3), Empatia (3), Przekonywanie (3)',
    description:
      'Masz Przewagę na wszystkie Przeciwstawne rzuty gdy starasz się rozwiązać konflikt, ocenić emocje i zamiary innych bądź określić, czy inni kłamią. Ponadto jesteś szanowany(a) i większość osób będzie się zwracała do Ciebie z szacunkiem, nawet jeśli za Tobą nie przepadają.'
  },
  'unity-with-nature': {
    name: 'Jedność z Naturą',
    requirements: 'Dusza (3), Empatia (3), Przekonywanie (3)',
    description:
      'Jesteś bardzo blisko związany(a) z Naturą.\n\nPodwajasz liczbę kości wynikających z ilości Punktów Umiejętności w Umiejętnościach Skradanie się oraz Zdolności Magiczne, jeżeli jesteś w miejscu niezmienionym przez jakąkolwiek inteligentną rasę.'
  },
  'backstab': {
    name: 'Cios w Plecy',
    requirements: 'Ciało (3), Skradanie się (3)',
    description:
      'Jeśli cel nie wie o Twojej obecności, to obrażenia, które zadajesz, są podwajane.\n\nTen Talent działa wyłącznie wtedy, gdy atakujesz metodami konwencjonalnymi.'
  },
  'opportunist': {
    name: 'Oportunista',
    requirements: '8 Punktów Initiatywy',
    description:
      'Twoja zdolność do reagowania na wydarzenia w trakcie walki jest zadziwiająca.\n\nRaz na rundę gdy przeciwnik odchodzi od Ciebie i masz możliwość zaatakowania go, możesz podjąć próbę ataku.'
  },
  'poison-resistance': {
    name: 'Odporność na Trucizny',
    requirements: 'Ciało (3), Wytrzymałość (3)',
    description:
      'Postać do pewnego stopnia uodporniła się na zatrucia.\n\nGdy postać musi wykonać test na Wytrzymałość aby uniknąć zatrucia, podwój ilość kości wynikającą z poziomu Umiejętności Wytrzymałość.'
  },
  'daydreamer': {
    name: 'Sen na Jawie',
    requirements: 'Dusza (2), Determinacja (3) lub Rasa (Elf)',
    description:
      'Nie potrzebujesz snu.\n\nElfy w przeciwieństwie do innych ras nie śpią, ale nie wszystkie potrafią kontrolować swoje myśli w trakcie odpoczynku.'
  },
  'prattler': {
    name: 'Gaduła',
    requirements: 'Dusza (2), Przekonywanie (2)',
    description:
      'Podwajasz liczbę kości wynikających z ilości Punktów Umiejętności w Umiejętności Przekonywanie jeżeli chcesz kogoś zagadać lub odwrócić czyjąś uwagę swoją gadaniną.'
  },
  'technological-aptitude': {
    name: 'Technologiczna Jest Wśród Nas',
    requirements: 'Rasa (Człowiek)',
    description:
      'Jak inne rasy na co dzień mają styczność z magią, tak ludzie posługują się znacznie bardziej zaawansowaną technologią niż inne rasy - telefony, komputery, samochody… Długo by tu wymieniać. Dla innych ras ludzka technologia jest niezrozumiała, ale ludzie potrafią się nią bez problemu posługiwać.\n\nPodstawowa obsługa ludzkich urządzeń nie sprawia Ci kłopotu, a dodatkowo jeżeli masz instrukcję do danego urządzenia w języku zrozumiałym dla ciebie, to bez problemu możesz skorzystać z technologii Obcej cywilizacji, której poziom technologiczny jest porównywalny bądź niższy do poziomu cywilizacji ziemskiej.'
  },
  'hover': {
    name: 'Zawisanie w Powietrzu',
    requirements: 'Zdolność do latania (np. skrzydła lub zaklęcie Lot)',
    description:
      'Postać, która normalnie musi być w ciągłym ruchu gdy jest w powietrzu, dzięki magii może się zatrzymać i zawisnąć nad ziemią.\n\nJeżeli postać ma Zdolność do latania, to może zawisać w powietrzu bez konieczności ruchu. Jeżeli postać nie ma Zdolności do latania, to może zawisać w powietrzu tylko wtedy, gdy używa zaklęcia Lot.'
  },
  'evasive-actions': {
    name: 'Powietrzne Uniki',
    requirements: 'Zdolność do latania (np. skrzydła lub zaklęcie Lot)',
    description:
      'Gdy postać jest atakowana na dystans, to podwaja bonusowe kości z Umiejętności Refleks gdy unika ataku.'
  },
  'magic-aptitude': {
    name: 'Jedność z Magią',
    description:
      'Jesteś bardzo blisko związany(a) z Magią.\n\nPodczas tworzenia postaci po wykonaniu rzutu na Magię od wyniku na rzucie kością odejmij 1, a ponadto jeżeli wynik po odjęciu będzie mniejszy niż 7, wykonaj ponownie rzut.'
  },
  'magical-resistance': {
    name: 'Odporność na Magię',
    description:
      'Podczas tworzenia postaci po wykonaniu rzutu na Magię do wyniku na rzucie kością, jeżeli wynik jest mniejszy niż 10, dodaj 1. Postać raz na rundę może za darmo przerzucić wynik testu na przeciwstawianie się efektom zaklęć.'
  },
  'flight': {
    name: 'Latanie',
    requirements: 'Naturalna zdolność do latania (np. skrzydła)',
    description:
      'Postać potrafi latać.\n\nJeżeli postać ma naturalną zdolność do latania, to może latać bez konieczności używania zaklęcia Lot.'
  }
}

export const RACIAL_SKILLS = {
  human: {
    determination: 1,
    intuition: 1
  },
  elf: {
    'magic-talent': 1,
    'dexerity': 1,
    'reflexes': 1
  },
  feles: {
    'reflexes': 1,
    'concealment': 1,
    'perception': 1,
    'nature-lore': 1,
    'dexerity': 1
  },
  naga: {
    'reflexes': 1,
    'ballistic-skills': 1,
    'weapon-skills': 1
  },
  angel: {
    devotion: 1,
    reflexes: 1
  }
}

export const RACIAL_TALENTS = {
  human: {
    'technological-aptitude': 1,
    'free-talent': 2
  },
  elf: {
    'sensitive-senses_hearing': 1,
    'magic-aptitude': 1,
    'magic-sense': 1
  },
  feles: {
    'unity-with-nature': 1,
    'sensitive-senses_hearing': 1,
    'sensitive-senses_sight': 1
  },
  naga: {
    'oppurtunistic': 1,
    'combat-ready': 1,
    'magical-resistance': 1
  },
  angel: {
    'blessed_jahwe': 1,
    'flight': 1,
    'holy-origin': 1
  }
}

export const GLOBALS = {
  CHARACTER_ID: ''
}
