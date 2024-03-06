const header = document.querySelector("header");
const body = document.querySelector("body");
const burger = document.querySelector(".burger");
window.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 180) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  });
});
burger.addEventListener("click", () => {
  body.classList.toggle("body-scrolling");
  burger.classList.toggle("active");
  document.querySelector(".menubox").classList.toggle("menubox--active");
});
