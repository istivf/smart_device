'use strict';

var callButton = document.querySelector('.page-header__button');
var overlay = document.querySelector('.modal__overlay');
var modalClose = overlay.querySelector('.modal__close');
var nameInput = overlay.querySelector('.modal__name');
var phoneInput = overlay.querySelector('.modal__phone');
var modalTextarea = overlay.querySelector('.modal__question');
var navButton = document.querySelector('.page-footer__nav-title');
var contactsButton = document.querySelector('.page-footer__title--contacts');
var sendButton = overlay.querySelector('.modal__button');
var scrollButton = document.querySelector('.page-header__scroll');
var infoBlock = document.querySelector('.main-info');
var body = document.querySelector('body');
var ESC_KEYCODE = 27;

var openModal = function () {
  overlay.classList.remove('modal--hidden');
  document.addEventListener('keydown', onModalEscPress);
  nameInput.focus();
  body.classList.add('no-scroll');
};

var closeModal = function () {
  overlay.classList.add('modal--hidden');
  document.removeEventListener('keydown', onModalEscPress);
  body.classList.remove('no-scroll');
};

var onModalEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    overlay.classList.add('modal--hidden');
  }
};

callButton.addEventListener('click', function () {
  openModal();
});

modalClose.addEventListener('click', function () {
  closeModal();
});

overlay.addEventListener('click', function (evt) {
  if (evt.target === overlay) {
    closeModal();
  }
});

navButton.addEventListener('click', function () {
  if (navButton.classList.contains('page-footer__list--closed')) {
    navButton.classList.remove('page-footer__list--closed');
    navButton.classList.add('page-footer__list--opened');
  } else {
    navButton.classList.add('page-footer__list--closed');
    navButton.classList.remove('page-footer__list--opened');
  }
});

contactsButton.addEventListener('click', function () {
  if (contactsButton.classList.contains('page-footer__list--closed')) {
    contactsButton.classList.remove('page-footer__list--closed');
    contactsButton.classList.add('page-footer__list--opened');
  } else {
    contactsButton.classList.add('page-footer__list--closed');
    contactsButton.classList.remove('page-footer__list--opened');
  }
});

sendButton.addEventListener('click', function () {
  localStorage.setItem('name', nameInput.value);
  localStorage.setItem('phoneNumber', phoneInput.value);
  localStorage.setItem('question', modalTextarea.value);
});

scrollButton.addEventListener('click', function () {
  infoBlock.scrollIntoView({block: 'center', behavior: 'smooth'});
});
