document.getElementById("race-exp").addEventListener("change", function () {
  const yearExp = document.getElementById("year-exp");
  const totalExp = document.getElementById("total-exp");
  const remainingExp = document.getElementById("remaining-exp");

  remainingExp.value =
    parseInt(totalExp.value || 0) +
    parseInt(yearExp.value || 0) +
    parseInt(this.value || 0);
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

document.getElementById("year-exp").addEventListener("change", function () {
  const raceExp = document.getElementById("race-exp");
  const totalExp = document.getElementById("total-exp");
  const remainingExp = document.getElementById("remaining-exp");

  remainingExp.value =
    parseInt(totalExp.value || 0) +
    parseInt(raceExp.value || 0) +
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

document.getElementById("total-exp").addEventListener("change", function () {
  const yearExp = document.getElementById("year-exp");
  const raceExp = document.getElementById("race-exp");
  const remainingExp = document.getElementById("remaining-exp");

  remainingExp.value =
    parseInt(yearExp.value || 0) +
    parseInt(raceExp.value || 0) +
    parseInt(this.value || 0);
});

document
  .getElementById("total-attribute-points")
  .addEventListener("change", function () {
    const yearAttributePoints = document.getElementById(
      "year-attribute-points"
    );
    const raceAttributePoints = document.getElementById("race-attribut-points");
    const remainingAttributePoints = document.getElementById(
      "remaining-attribute-points"
    );

    remainingAttributePoints.value =
      parseInt(yearAttributePoints.value || 0) +
      parseInt(raceAttributePoints.value || 0) +
      parseInt(this.value || 0);
  });
