document
  .getElementById("character-creator")
  .addEventListener("submit", function (e) {
    try {
      e.preventDefault();

      const formData = new FormData(this);
      const data = Object.fromEntries(formData);

      const blob = new Blob([JSON.stringify(data)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;

      Swal.fire({
        title: "Podaj nazwę pliku",
        input: "text",
        inputLabel: "Nazwa pliku (bez rozszerzenia)",
        inputPlaceholder: "Wpisz nazwę pliku...",
        inputValue: data.name.toLowerCase().replace(/ /g, "-"),
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return "Musisz podać nazwę pliku!";
          }
        },
      }).then((result) => {
        try {
          if (!result.isConfirmed) {
            return;
          }

          console.debug(result.value);

          link.download = `${result.value}.json`;
          link.click();
          link.remove();

          Swal.fire({
            title: "Sukces",
            icon: "success",
            text: "Postać została wyeksportowana pomyślnie.",
            showConfirmButton: false,
            timer: 1500,
          });
        } catch (error) {
          Swal.fire({
            title: "Błąd",
            icon: "error",
            text: `W trakcie importu postaci wystąpił błąd (${error.message}).`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } catch (error) {
      Swal.fire({
        title: "Błąd",
        icon: "error",
        text: `W trakcie importu postaci wystąpił błąd (${error.message}).`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  });

document
  .getElementById("import-character")
  .addEventListener("click", function () {
    try {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "application/json";

      fileInput.addEventListener("change", function () {
        try {
          const file = this.files[0];
          const reader = new FileReader();

          reader.addEventListener("load", function () {
            const data = JSON.parse(this.result);

            for (const key in data) {
              if (key.includes("skill_")) {
                const skillName = key.replace("skill_[", "").replace("]", "");

                createSkill(skillName, data[key]);
                continue;
              } else if (key.includes("talent_")) {
                const talentName = key.replace("talent_[", "").replace("]", "");

                createTalent(talentName, data[key]);

                continue;
              }

              const element = document.querySelector(`[name="${key}"]`);

              if (!element) {
                return;
              }

              element.value = data[key];
              element.dispatchEvent(new Event("change"));
            }
          });

          reader.readAsText(file);

          Swal.fire({
            title: "Sukces",
            icon: "success",
            text: "Postać została zaimportowana pomyślnie.",
            showConfirmButton: false,
            timer: 1500,
          });
        } catch (error) {
          Swal.fire({
            title: "Błąd",
            icon: "error",
            text: `W trakcie importu postaci wystąpił błąd (${error.message}).`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

      fileInput.click();
    } catch (error) {
      Swal.fire({
        title: "Błąd",
        icon: "error",
        text: `W trakcie importu postaci wystąpił błąd (${error.message}).`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  });

document.getElementById("add-skill").addEventListener("click", function () {
  const skillElement = document.querySelector("select[name='skills']");

  if (!skillElement.value) {
    return;
  }

  createSkill(skillElement.value);
});

document.getElementById("add-talent").addEventListener("click", function () {
  const talentElement = document.querySelector("select[name='talents']");

  if (!talentElement.value) {
    return;
  }

  createTalent(talentElement.value);
});
