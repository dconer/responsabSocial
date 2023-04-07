// Set current year

const btn = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const navListEl = document.querySelector(".main-nav-list");
const heroSectionEl = document.querySelector(".section-hero");

btn.addEventListener("click", function (e) {
  headerEl.classList.toggle("nav-open");
});

navListEl.addEventListener("click", function (e) {
  if (e.target.className == "main-nav-link") {
    headerEl.classList.toggle("nav-open");
  }
});

const optn = {
  root: null,
  threshold: 0,
  rootMargin: "-80px",
};

const observer = new IntersectionObserver(function (entries) {
  const entry = entries[0];

  if (!entry.isIntersecting) {
    document.body.classList.add("sticky");
  } else {
    document.body.classList.remove("sticky");
  }
}, optn);

observer.observe(heroSectionEl);
