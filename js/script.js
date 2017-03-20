var pageHeader = document.querySelector('.page-header');
var navToggle = document.querySelector('.main-nav__toggle');
var navMain = document.querySelector('.main-nav');
var modalWindow = document.querySelector('.modal-add-to-cart');
var btnAddInCart = document.querySelector('.btn--add-in-cart');
var navMainList = document.querySelector('.main-nav__list--nojs');

pageHeader.classList.remove('page-header--nojs');
navToggle.classList.remove('main-nav__toggle--nojs');
navMain.classList.remove('main-nav--nojs');
navMainList.classList.remove('main-nav__list--nojs');

navToggle.addEventListener('click', function(event){
  event.preventDefault();

  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.add('main-nav__toggle--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.remove('main-nav__toggle--opened');
  }
});

btnAddInCart.addEventListener('click', function(event) {
  event.preventDefault();
});
