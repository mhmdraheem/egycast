document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  toggleButton.addEventListener("click", function () {
    nav.classList.toggle("nav-open");
  });
});

// Close menu when clicking a menu link
const navLinks = document.querySelectorAll(".main-nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const navMenu = document.querySelector(".site-header .main-nav.nav-open");
    navMenu.classList.toggle("nav-open");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".site-header .main-nav.nav-open");
  if (navMenu && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
    navMenu.classList.toggle("nav-open");
  }
});
