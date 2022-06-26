const toggle = document.querySelector(".toggle");
const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modal-body");

window.addEventListener("click", outsideClick);

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  modal.classList.toggle("active");
  openModal;
  closeModal;
});

function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}

function outsideClick(e) {
  if (e.target == modalBody) {
    closeModal();
  }
}
