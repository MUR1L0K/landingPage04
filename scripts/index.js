document.querySelectorAll(".duvida").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("ativa");
  });
});
