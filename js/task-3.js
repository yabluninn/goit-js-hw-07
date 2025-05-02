const input = document.querySelector("input");
const span = document.querySelector("span");

input.addEventListener("input", () => {
  if (input.value.trim() === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = input.value.trim();
  }
});
