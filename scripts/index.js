const raceSelector = document.querySelector("select[name='race']");
const magicSelector = document.querySelector("select[name='magic-type']");

for (const race in RACES) {
  const option = document.createElement("option");

  option.value = race;
  option.innerText = RACES[race];

  raceSelector.appendChild(option);
}

for (const type in MAGIC_TYPES) {
  if ("subtypes" in MAGIC_TYPES[type]) {
    const optgroup = document.createElement("optgroup");

    optgroup.label = MAGIC_TYPES[type].name;

    for (const subtype in MAGIC_TYPES[type].subtypes) {
      const option = document.createElement("option");

      option.value = subtype;
      option.innerText = MAGIC_TYPES[type].subtypes[subtype];

      optgroup.appendChild(option);
    }

    magicSelector.appendChild(optgroup);
  } else {
    const option = document.createElement("option");

    option.value = type;
    option.innerText = MAGIC_TYPES[type].name;

    magicSelector.appendChild(option);
  }
}

for (const skill in SKILLS) {
  const skillElement = document.querySelector("select[name='skills']");

  const option = document.createElement("option");

  option.value = skill;
  option.innerText = SKILLS[skill];

  skillElement.appendChild(option);
}
