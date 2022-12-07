let dispMenu = document.querySelector(".disp-menu");
let nav_right = document.querySelector(".nav-right");
// let header_nav = document.querySelector(".header-nav");

dispMenu.addEventListener("click", function () {
  nav_right.classList.toggle("menu");
});
