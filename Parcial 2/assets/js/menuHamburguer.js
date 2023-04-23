document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navbarMenu = document.getElementById("navbar-menu");
  
    hamburgerBtn.addEventListener("click", function () {
      navbarMenu.classList.toggle("show");
    });
});
  