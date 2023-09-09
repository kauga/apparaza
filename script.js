const btnNavEl = document.querySelector("btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventlistener('click', function() {
  headerEl.classList.toggle("nav-open");
});