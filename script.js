"use strict";

// Function for the Headers Burger-Menu:

let menuOpen = false;

function toggleBurgerMenu() {
  menuOpen = !menuOpen;
  const $bmw = document.querySelector(".burger-menu-wrapper");
  if (menuOpen) {
    $bmw.classList.add("active");
  } else {
    $bmw.classList.remove("active");
  }
}
