var menuButton = document.querySelector('.main-nav__toggle');
var menuBlock = document.querySelector('.main-nav');

menuButton.addEventListener('click', function(event){
  event.preventDefault();
  menuButton.classList.toggle('main-nav__toggle--opened');
  menuBlock.classList.toggle('main-nav--opened');
});
