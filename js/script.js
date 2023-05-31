"use strict";

const menuBurger = document.querySelector('.header__burger');

if (menuBurger) {
   console.log(menuBurger);
   const headerMenu = document.querySelector('.header__menu');
   menuBurger.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      console.log("click");
      menuBurger.classList.toggle('_active');
      headerMenu.classList.toggle('_active');
   })
}
   
window.addEventListener("scroll", () => {
   const headerElement = document.querySelector('.header');
   if (window.scrollY <= 0) {
      headerElement.classList.remove('_scroll');
   } else {
      headerElement.classList.add('_scroll');
   }
});


