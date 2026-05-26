// Grab the elements
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");


setTimeout(() => {
  modal.classList.add("show");
}, 5000);

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});