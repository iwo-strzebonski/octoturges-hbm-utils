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
    "border-slate-700": "#a78bfa",
    "border-slate-400": "#a78bfa",
  },
};

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

  return className in color
    ? style.replace("{}", color[className])
    : "";
}

document
  .querySelector("select[name='magic-type']")
  .addEventListener("change", function () {
    const selected = this.value;
    const themable = document.querySelectorAll("[data-themable]");
    const magicDice = document.getElementById("magic-dice");

    themable.forEach((element) => {
      if (!(selected in COLORS)) {
        element.removeAttribute("style");
        return;
      }

      const color = COLORS[selected];
      let style = "";

      element.classList.forEach((className) => {
        element.setAttribute(
          "style",
          (style += getColor(color, className) + " ")
        );
      });
    });

    magicDice.dispatchEvent(new Event("change"));
  });

document
  .querySelector("select[name='race']")
  .addEventListener("change", function () {
    const raceExp = document.getElementById("race-exp");
    const raceAttributePoints = document.getElementById(
      "race-attribute-points"
    );

    switch (this.value) {
      case "human":
        raceExp.value = 12;
        raceAttributePoints.value = 3;
        break;
      case "elf":
        raceExp.value = 11;
        raceAttributePoints.value = 3;
        break;
      case "feles":
        raceExp.value = 12;
        raceAttributePoints.value = 2;
        break;
      case "naga":
        raceExp.value = 8;
        raceAttributePoints.value = 4;
        break;
      case "angel":
        raceExp.value = 4;
        raceAttributePoints.value = 5;
        break;
    }

    raceExp.dispatchEvent(new Event("change"));
    raceAttributePoints.dispatchEvent(new Event("change"));
  });

document
  .querySelector("select[name='academic-year']")
  .addEventListener("change", function () {
    const yearExp = document.getElementById("year-exp");
    const yearAttributePoints = document.getElementById(
      "year-attribute-points"
    );

    switch (this.value) {
      case "first":
        yearExp.value = 0;
        yearAttributePoints.value = 0;
        break;
      case "second":
        yearExp.value = 4;
        yearAttributePoints.value = 1;
        break;
      case "third":
        yearExp.value = 8;
        yearAttributePoints.value = 2;
        break;
      case "fourth":
        yearExp.value = 12;
        yearAttributePoints.value = 3;
        break;
      case "fifth":
        yearExp.value = 16;
        yearAttributePoints.value = 4;
        break;
    }

    yearExp.dispatchEvent(new Event("change"));
    yearAttributePoints.dispatchEvent(new Event("change"));
  });

document
  .querySelector("select[name='magic-level']")
  .addEventListener("change", function () {
    const magicDice = document.getElementById("magic-dice");
    const maxMana = document.getElementById("max-mana");
    const magicType = document.querySelector("select[name='magic-type']");
    const multiplier = magicType.value === "mana-source" ? 2 : 1;

    switch (this.value) {
      case "0":
        magicDice.value = 6;
        maxMana.value = magicType.value === "mana-source" ? -1 : 36;
        break;
      case "1":
        magicDice.value = 4;
        maxMana.value = 18 * multiplier;
        break;
      case "2":
        magicDice.value = 4;
        maxMana.value = 15 * multiplier;
        break;
      case "3":
        magicDice.value = 3;
        maxMana.value = 13 * multiplier;
        break;
      case "4":
        magicDice.value = 3;
        maxMana.value = 12 * multiplier;
        break;
      case "5":
        magicDice.value = 3;
        maxMana.value = 11 * multiplier;
        break;
      case "6":
        magicDice.value = 2;
        maxMana.value = 10 * multiplier;
        break;
      case "7":
        magicDice.value = 2;
        maxMana.value = 9 * multiplier;
        break;
      case "8":
        magicDice.value = 1;
        maxMana.value = 7 * multiplier;
        break;
      case "9":
        magicDice.value = 1;
        maxMana.value = 4 * multiplier;
        break;
      case "10":
        magicDice.value = 0;
        maxMana.value = 3 * multiplier;
        break;
    }

    magicDice.dispatchEvent(new Event("change"));
  });
