// VARIABILI:
var hamburgerIcon = $(".header-right > a");
var hamburgerMenu = $(".hamburger-menu");

// 1. mostro l'hamburgher-menu al click suyll'icona 'bars'
hamburgerIcon.click(
  function () {
    hamburgerMenu.show("fast");
  }
);
