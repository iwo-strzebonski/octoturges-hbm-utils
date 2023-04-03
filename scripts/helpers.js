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
