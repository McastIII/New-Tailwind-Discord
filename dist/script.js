// toggle menu
const toggleMenu = document.querySelector(".toggle__menu");
const mobileNav = document.querySelector(".header__actions");
const header = document.querySelector(".header");
const blurr = document.querySelector(".blur");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    mobileNav.classList.toggle("open");
    header.classList.toggle("open");
    blurr.classList.toggle("open");
});

//drop down
const foot = document.querySelectorAll(".footer__item h4");
foot.forEach((drop) => {
  drop.addEventListener("click", () => {
    drop.nextElementSibling.classList.toggle("open");
    drop.querySelector("i").classList.toggle("open");
  });
});
