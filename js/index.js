document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu");
  const navMenu = document.querySelector(".nav-flex");

  menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("show");
   
  });
});
