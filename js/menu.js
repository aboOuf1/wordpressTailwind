const hamburgerr = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const closeMenu = document.querySelector(".closeMenu");

hamburgerr.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
  hamburgerr.classList.remove("block");
  hamburgerr.classList.add("hidden");
  closeMenu.classList.remove("hidden");
  closeMenu.classList.add("block");

  navMenu.classList.remove("-translate-y-52");
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.add("hidden");
  hamburgerr.classList.remove("hidden");
  hamburgerr.classList.add("block");
  closeMenu.classList.remove("block");
  closeMenu.classList.add("hidden");

  navMenu.classList.add("-translate-y-52");
});
