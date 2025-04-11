// Затемнение hedear при скролле
const header = document.querySelector(".top-header");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  scrollPosition > 100
    ? header.classList.add("scrolled")
    : header.classList.remove("scrolled");
});

// Управление мобильным меню
const closeMenuBtn = document.querySelector(".btn-close");
const openMenuBtn = document.querySelector(".btn-menu");
const navMenuNode = document.querySelector(
  ".nav__list-mobile",
);
const navOverlayNode = document.querySelector(".overlay");

openMenuBtn.addEventListener("click", () => {
  navMenuNode.classList.add("open");
  navOverlayNode.classList.add("open");
  document.body.style.overflow = "hidden";
});
closeMenuBtn.addEventListener("click", () => {
  navMenuNode.classList.remove("open");
  navOverlayNode.classList.remove("open");
  document.body.style.overflow = "auto";
});
navOverlayNode.addEventListener("click", () => {
  navMenuNode.classList.remove("open");
  navOverlayNode.classList.remove("open");
  document.body.style.overflow = "auto";
});
