'use strict';

const menuBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');

if (menuBurger && headerMenu) {
   menuBurger.addEventListener('click', function (e) {
      document.body.classList.toggle('_lock');
      menuBurger.classList.toggle('_active');
      headerMenu.classList.toggle('_active');
   })
}

window.addEventListener('scroll', () => {
   const headerElement = document.querySelector('.header');
   if (headerElement) {
      headerElement.classList.toggle('_scroll', window.scrollY > 0);
   }
});
