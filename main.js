// VARIABILI:
var hamburgerIcon = $(".header-right > a");
var hamburgerMenu = $(".hamburger-menu");
var closeIcon = $(".close");

// 1. mostro l'hamburgher-menu al click suyll'icona 'bars'
hamburgerIcon.click(
  function () {
    hamburgerMenu.addClass("active");
  }
);

// 2. nascondo l'hamburgher-menu al click suyll'icona 'x'
closeIcon.click(
  function () {
    hamburgerMenu.removeClass("active");
  }
);
