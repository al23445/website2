// pobieramy element z klasą "menu-button" i przypisujemy go do zmiennej button
const button = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

// tworzymy funkcję toggleMenu
function toggleMenu() {
  nav.classList.toggle("nav-mobile");
  button.classList.toggle("menu-button-open");

  if (button.classList.contains("menu-button-open")) {
    button.innerHTML = "X";
  } else {
    button.innerHTML = "menu";
  }
}

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
