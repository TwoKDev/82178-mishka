var pageHeader = document.querySelector('.page-header__inner');
var navToggle = document.querySelector('.main-nav__toggle');
var navMain = document.querySelector('.main-nav');
var modalWindow = document.querySelector('.modal-add-to-cart');
var modalOverlay = document.querySelector('.modal-overlay');
var btnOpenModal = document.querySelectorAll('.btn--open-modal-window');
var navMainList = document.querySelector('.main-nav__list--nojs');

pageHeader.classList.remove('page-header__inner--nojs');
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

Array.prototype.forEach.call(btnOpenModal, function(button) {
  button.addEventListener('click', function(event) {
    event.preventDefault();

    if (modalWindow.classList.contains('modal-add-to-cart--closed')) {
      modalWindow.classList.remove('modal-add-to-cart--closed');
      modalWindow.classList.add('modal-add-to-cart--opened');
      modalOverlay.classList.add('modal-overlay--opened');
    }
  });
});

modalOverlay.addEventListener('click', function(event) {
  if (modalWindow.classList.contains('modal-add-to-cart--opened')) {
    modalWindow.classList.add('modal-add-to-cart--closed');
    modalOverlay.classList.add('modal-overlay--closed');
    modalWindow.classList.remove('modal-add-to-cart--opened');
    modalOverlay.classList.remove('modal-overlay--opened');
  }
});



/**************** Yandex Map *******************/

ymaps.ready(init);
var myMap;
var myPlacemark;

function init(){
  myMap = new ymaps.Map('map', {
      center: [59.93632956, 30.32173485],
      zoom: 16
  });

  myPlacemark = new ymaps.Placemark([59.93632956, 30.32173485], {
    balloonContentHeader: '<img src="img/logo-footer.svg">',
    balloonContentBody: 'Милые штучки ручной работы для дома',
    hintContent: 'Mishka - Милые штучки ручной работы для дома'
  },
  {
      iconLayout: 'default#image',
      iconImageHref: 'img/icon-map-pin.svg',
      iconImageSize: [67, 100],
      iconImageOffset: [-40, -95]
  });

  myMap.geoObjects.add(myPlacemark);
}
