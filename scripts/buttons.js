document
  .getElementById("character-creator")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    console.log(data);

    const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "character.json";
    link.click();
    link.remove();
  });

document
  .getElementById("import-character")
  .addEventListener("click", function () {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "application/json";

    fileInput.addEventListener("change", function () {
      const file = this.files[0];
      const reader = new FileReader();

      reader.addEventListener("load", function () {
        const data = JSON.parse(this.result);

        for (const key in data) {
          const element = document.querySelector(`[name="${key}"]`);

          if (!element) {
            return;
          }

          element.value = data[key];
          element.dispatchEvent(new Event("change"));
        }
      });

      reader.readAsText(file);
    });

    fileInput.click();
  });

document.getElementById("add-skill").addEventListener("click", function () {
  const skillElement = document.querySelector("select[name='skills']");
  const skillList = document.getElementById("skill-list");

  if (!skillElement.value) {
    return;
  }

  const skill = document.createElement("li");
  skill.innerText = SKILLS[skillElement.value];
  skill.className = "w-full inline-flex justify-between items-center";

  const removeButton = document.createElement("button");
  const removeButtonIcon = document.createElement("i");

  removeButtonIcon.className = "fa-solid fa-trash";
  removeButton.appendChild(removeButtonIcon);
  removeButton.addEventListener("click", function () {
    skill.remove();
  });

  const skillInput = document.createElement("input");
  skillInput.type = "number";
  skillInput.name = `skill_[${skillElement.value}]`;
  skillInput.id = `skill_${skillElement.value}`;
  skillInput.placeholder = "Poziom umiejętności";
  skillInput.min = 0;
  skillInput.value = 1;
  skillInput.className =
    "bg-transparent text-sm p-0 pb-1 border-0 border-b border-slate-400";
  skillInput.required = true;
  skillInput.setAttribute("data-themable", "true");
  skillInput.addEventListener("change", function () {
    if (this.value <= 0) {
      this.parentElement.remove();
    }
  });

  skill.appendChild(skillInput);
  skill.appendChild(removeButton);

  skillList.appendChild(skill);
});
