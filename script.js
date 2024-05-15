const offerBtn = document.getElementById("offer-btn");
const dialog = document.getElementById("dialog");
const dialogClose = document.getElementById("dialog-close");

offerBtn.addEventListener("click", (event) => {
  event.preventDefault();
  setTimeout(() => {
    dialog.showModal();
    dialog.style.display = "flex";
  }, 10);
});

dialogClose.addEventListener("click", () => {
  dialog.close();
  dialog.style.display = ""; // Сбрасываем стиль display при закрытии
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
    dialog.style.display = ""; // Сбрасываем стиль display при закрытии
  }
});
