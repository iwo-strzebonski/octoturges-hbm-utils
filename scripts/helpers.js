function getColor(color, className) {
  let style = "";

  if (className.includes("text")) {
    style += "color: {};";
  }

  if (className.includes("bg")) {
    style += "background-color: {};";
  }

  if (className.includes("border")) {
    style += "border-color: {};";
  }

  return className in color ? style.replace("{}", color[className]) : "";
}

function createSkill(skillName, value = 1) {
  const skillList = document.getElementById("skill-list");

  for (const child of skillList.children) {
    const input = child.querySelector("input");

    if (input.name === `skill_[${skillName}]`) {
      return;
    }
  }

  const skill = document.createElement("li");
  skill.innerText = SKILLS[skillName];
  skill.className = "w-full inline-flex justify-between items-center";

  if (["reflexes", "perception"].includes(skillName)) {
    const initiative = document.getElementById("initiative");

    initiative.value = Number(initiative.value) + value;
  }

  const removeButton = document.createElement("button");
  const removeButtonIcon = document.createElement("i");

  removeButtonIcon.className = "fa-solid fa-trash";
  removeButton.appendChild(removeButtonIcon);
  removeButton.addEventListener("click", function () {
    const raceSelector = document.querySelector("select[name='race']");
    const remainingExp = document.getElementById("remaining-exp");

    const expCost =
      Number(skill.value || 0) -
      +(
        (RACIAL_SKILLS[raceSelector.value] &&
          skill.name in RACIAL_SKILLS[raceSelector.value]) ||
        0
      );

    remainingExp.value = Number(remainingExp.value) + expCost;

    if (["reflexes", "perception"].includes(skillName)) {
      const initiative = document.getElementById("initiative");

      initiative.value = Number(initiative.value) - skill.value;
    }

    skill.remove();
  });

  const skillInput = document.createElement("input");
  skillInput.type = "number";
  skillInput.name = `skill_[${skillName}]`;
  skillInput.id = `skill_${skillName}`;
  skillInput.placeholder = "Poziom umiejętności";
  skillInput.min = 0;
  skillInput.value = value;
  skillInput.className =
    "bg-transparent text-sm p-0 pb-1 border-0 border-b border-slate-400";
  skillInput.required = true;
  skillInput.setAttribute("data-themable", "true");
  skillInput.addEventListener("focus", function () {
    this.oldValue = this.value;
  });
  skillInput.addEventListener("change", function () {
    const raceSelector = document.querySelector("select[name='race']");

    const expCost =
      Number(this.value || 0) -
      +(
        (RACIAL_SKILLS[raceSelector.value] &&
          this.name in RACIAL_SKILLS[raceSelector.value]) ||
        0
      );

    const oldExpCost =
      Number(this.oldValue || 0) -
      +(
        (RACIAL_SKILLS[raceSelector.value] &&
          this.name in RACIAL_SKILLS[raceSelector.value]) ||
        0
      );

    const remainingExp = document.getElementById("remaining-exp");

    remainingExp.value = Number(remainingExp.value) - expCost + oldExpCost;

    if (["reflexes", "perception"].includes(skillName)) {
      const initiative = document.getElementById("initiative");

      initiative.value = Number(initiative.value) - oldExpCost + expCost;
    }

    if (Number(this.value) <= 0) {
      this.parentElement.remove();
    }

    this.oldValue = this.value;
  });

  const raceSelector = document.querySelector("select[name='race']");

  const expCost =
    1 -
    +(
      (RACIAL_SKILLS[raceSelector.value] &&
        skill.name in RACIAL_SKILLS[raceSelector.value]) ||
      0
    );

  const remainingExp = document.getElementById("remaining-exp");

  remainingExp.value = Number(remainingExp.value) - expCost;

  skill.appendChild(skillInput);
  skill.appendChild(removeButton);

  skillList.appendChild(skill);
}

function getAllSkillsCost() {
  const raceSelector = document.querySelector("select[name='race']");

  let cost = 0;

  for (const skill of document.querySelectorAll("input[name^='skill_']")) {
    cost +=
      Number(skill.value) -
      +(
        (RACIAL_SKILLS[raceSelector.value] &&
          RACIAL_SKILLS[raceSelector.value][skill.name]) ||
        0
      );
  }

  return cost;
}

function createTalent(talentName, value = 1) {
  const talentList = document.getElementById("talent-list");

  for (const child of talentList.children) {
    const input = child.querySelector("input");

    if (input.name === `talent_[${talentName}]`) {
      return;
    }
  }

  console.debug("Creating talent", talentName, value);

  const [tname, subtname, gtname] = talentName.split("_");

  const talent = document.createElement("li");
  talent.className = "w-full inline-flex justify-between items-center";

  if (gtname) {
    talent.innerText = `${TALENTS[tname].name} (${TALENTS[tname].types[subtname].subtypes[gtname]})`;
  } else if (subtname) {
    talent.innerText = `${TALENTS[tname].name} (${TALENTS[tname].types[subtname].name})`;
  } else {
    talent.innerText = TALENTS[talentName].name;
  }

  talent.className = "w-full inline-flex justify-between items-center";

  if (talentName === "combat-ready") {
    const initiative = document.getElementById("initiative");

    initiative.value = Number(initiative.value) + value * 2;
  }

  const removeButton = document.createElement("button");
  const removeButtonIcon = document.createElement("i");

  removeButtonIcon.className = "fa-solid fa-trash";
  removeButton.appendChild(removeButtonIcon);
  removeButton.addEventListener("click", function () {
    const remainingExp = document.getElementById("remaining-exp");

    remainingExp.value =
      Number(remainingExp.value) + Number(talentInput.value || 0) * 4;

    if (talentName === "combat-ready") {
      const initiative = document.getElementById("initiative");

      initiative.value = Number(initiative.value) - talentInput.value * 2;
    }

    talent.remove();
  });

  const talentInput = document.createElement("input");
  talentInput.type = "number";
  talentInput.name = `talent_[${talentName}]`;
  talentInput.id = `talent_${talentName}`;
  talentInput.placeholder = "Poziom talentu";
  talentInput.min = 0;
  talentInput.value = value;
  talentInput.className =
    "bg-transparent text-sm p-0 pb-1 border-0 border-b border-slate-400";
  talentInput.required = true;
  talentInput.setAttribute("data-themable", "true");
  talentInput.addEventListener("focus", function () {
    this.oldValue = this.value;
  });
  talentInput.addEventListener("change", function () {
    const remainingExp = document.getElementById("remaining-exp");

    remainingExp.value =
      Number(remainingExp.value) -
      Number(this.value || 0) * 4 +
      Number(this.oldValue || 0) * 4;

    if (Number(this.value) <= 0) {
      this.parentElement.remove();
    }

    if (talentName === "combat-ready") {
      const initiative = document.getElementById("initiative");

      initiative.value =
        Number(initiative.value) - (this.oldValue - this.value) * 2;
    }

    this.oldValue = this.value;
  });

  const remainingExp = document.getElementById("remaining-exp");

  remainingExp.value =
    Number(remainingExp.value) - Number(talentInput.value || 0) * 4;

  talent.appendChild(talentInput);
  talent.appendChild(removeButton);

  talentList.appendChild(talent);
}
