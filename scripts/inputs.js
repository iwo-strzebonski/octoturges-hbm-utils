document.getElementById("race-exp").addEventListener("change", function () {
  const remainingExp = document.getElementById("remaining-exp");
  remainingExp.dispatchEvent(new Event("change"));
});

document.getElementById("year-exp").addEventListener("change", function () {
  const remainingExp = document.getElementById("remaining-exp");
  remainingExp.dispatchEvent(new Event("change"));
});

document.getElementById("total-exp").addEventListener("change", function () {
  const remainingExp = document.getElementById("remaining-exp");
  remainingExp.dispatchEvent(new Event("change"));
});

document
  .getElementById("remaining-exp")
  .addEventListener("change", function () {
    const yearExp = document.getElementById("year-exp");
    const raceExp = document.getElementById("race-exp");
    const totalExp = document.getElementById("total-exp");

    this.value =
      parseInt(yearExp.value || 0) +
      parseInt(raceExp.value || 0) +
      parseInt(totalExp.value || 0) -
      getAllSkillsCost();
  });

document
  .getElementById("race-attribute-points")
  .addEventListener("change", function () {
    const yearAttributePoints = document.getElementById(
      "year-attribute-points"
    );
    const totalAttributePoints = document.getElementById(
      "total-attribute-points"
    );
    const remainingAttributePoints = document.getElementById(
      "remaining-attribute-points"
    );

    remainingAttributePoints.value =
      parseInt(totalAttributePoints.value || 0) +
      parseInt(yearAttributePoints.value || 0) +
      parseInt(this.value || 0);
  });

document
  .getElementById("year-attribute-points")
  .addEventListener("change", function () {
    const raceAttributePoints = document.getElementById(
      "race-attribute-points"
    );
    const totalAttributePoints = document.getElementById(
      "total-attribute-points"
    );
    const remainingAttributePoints = document.getElementById(
      "remaining-attribute-points"
    );

    remainingAttributePoints.value =
      parseInt(totalAttributePoints.value || 0) +
      parseInt(raceAttributePoints.value || 0) +
      parseInt(this.value || 0);
  });

document.getElementById("body").addEventListener("change", function () {
  const maxHp = document.getElementById("max-hp");
  const remainingAttributePoints = document.getElementById(
    "remaining-attribute-points"
  );

  remainingAttributePoints.dispatchEvent(new Event("change"));
  maxHp.dispatchEvent(new Event("change"));
});

document.getElementById("mind").addEventListener("change", function () {
  const maxHp = document.getElementById("max-hp");
  const initiative = document.getElementById("initiative");
  const remainingAttributePoints = document.getElementById(
    "remaining-attribute-points"
  );

  remainingAttributePoints.dispatchEvent(new Event("change"));
  maxHp.dispatchEvent(new Event("change"));
  initiative.dispatchEvent(new Event("change"));
});

document.getElementById("soul").addEventListener("change", function () {
  const maxHp = document.getElementById("max-hp");
  const maxMettle = document.getElementById("max-mettle");
  const remainingAttributePoints = document.getElementById(
    "remaining-attribute-points"
  );

  remainingAttributePoints.dispatchEvent(new Event("change"));
  maxHp.dispatchEvent(new Event("change"));

  maxMettle.value = Math.ceil(parseInt(this.value || 0) / 2);
});

document
  .getElementById("total-attribute-points")
  .addEventListener("change", function () {
    const remainingAttributePoints = document.getElementById(
      "remaining-attribute-points"
    );

    remainingAttributePoints.dispatchEvent(new Event("change"));
  });

document
  .getElementById("remaining-attribute-points")
  .addEventListener("change", function () {
    const yearAttributePoints = document.getElementById(
      "year-attribute-points"
    );
    const raceAttributePoints = document.getElementById(
      "race-attribute-points"
    );
    const totalAttributePoints = document.getElementById(
      "total-attribute-points"
    );
    const body = document.getElementById("body");
    const mind = document.getElementById("mind");
    const soul = document.getElementById("soul");

    this.value =
      parseInt(yearAttributePoints.value || 0) +
      parseInt(raceAttributePoints.value || 0) +
      parseInt(totalAttributePoints.value || 0) -
      parseInt(body.value || 0) -
      parseInt(mind.value || 0) -
      parseInt(soul.value || 0) +
      3;
  });

document.getElementById("max-hp").addEventListener("change", function () {
  const body = document.getElementById("body");
  const mind = document.getElementById("mind");
  const soul = document.getElementById("soul");

  this.value =
    3 *
    (parseInt(body.value || 0) +
      parseInt(mind.value || 0) +
      parseInt(soul.value || 0));
});

document.getElementById("initiative").addEventListener("change", function () {
  const mind = document.getElementById("mind");
  const reflexes = document.getElementById("reflexes");
  const perception = document.getElementById("perception");

  let combatReadyLvl = 0;

  const talentList = document.getElementById("talent-list");

  if (talentList) {
    for (const child of talentList.children) {
      const input = child.querySelector("input");

      if (input.name === "talent_[combat-ready]") {
        combatReadyLvl = parseInt(input.value || 0);
        break;
      }
    }
  }

  this.value =
    parseInt(mind.value || 0) +
    parseInt(reflexes?.value || 0) +
    parseInt(perception?.value || 0) +
    2 * combatReadyLvl;
});
