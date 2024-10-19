const dropdown = document.getElementById("drop-down");
const hambarg = document.getElementById("hambarg");

hambarg.addEventListener("click", () => {
  dropdown.style.transform =
    dropdown.style.transform === "translateY(0%)"
      ? "translateY(-200%)"
      : "translateY(0%)";
});
