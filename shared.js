var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var button = document.querySelectorAll(".plans .button");
var hamburgerBtn = document.querySelector(".toggle-button");
var sideMenu = document.querySelector(".mobile-nav");
var exitSideMenuBtn = document.querySelector(".mobile-nav__exit");
var modalButton = document.querySelector(".modal__action--negative");

button.forEach((button) => {
  button.addEventListener("click", () => {
    backdrop.classList.add("open");
    modal.classList.add("open");
  });
});

hamburgerBtn.addEventListener("click", () => {
  sideMenu.style.display = "flex";
  setTimeout(() => sideMenu.classList.add("sideMenuOpen"), 300);

  backdrop.classList.add("open");
});

const closeModal = () => {
  if (modal) {
    modal.classList.remove("open");
  }
  if (sideMenu) {
    sideMenu.classList.remove("sideMenuOpen");
    setTimeout(() => {
      sideMenu.style.display = "none";
    }, 300);
  }

  backdrop.classList.remove("open");
};

if (modalButton) {
  modalButton.addEventListener("click", closeModal);
}

backdrop.addEventListener("click", () => {
  closeModal();
});

exitSideMenuBtn.addEventListener("click", () => {
  closeModal();
});
