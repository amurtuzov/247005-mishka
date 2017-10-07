'use strict';


window.initMap = function() {
  var myLatLng = {lat: 59.938800, lng: 30.3229900};

        // Карта
  var map = new google.maps.Map(document.querySelector('.contacts__map') , {
    center: {lat: 59.939400, lng: 30.3229900},
    scrollwheel: true,
    zoom: 16
  });

        // Маркер
  var image = 'img/icon-map-pin.svg';
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    icon: image,
    draggable: true,
    animation: google.maps.Animation.DROP,
    title: 'MishkaShop'
  });
}


// mobile menu
var mainNav = document.querySelector('.main-nav');
var toggleBtn = mainNav.querySelector('.main-nav__toggle')
mainNav.classList.remove('main-nav--nojs');
function toggleMenu() {
  mainNav.querySelector('.main-nav__dropdown').classList.toggle('main-nav__dropdown-show');
  toggleBtn.classList.toggle('main-nav__toggle--open');
}
toggleBtn.onclick = toggleMenu;


// slider with add/remove style

var slider = document.querySelector('.slider');
var slides = slider.querySelectorAll('blockquote');
var currentSlide = 0;
slides[1].style.display = "none";
slides[2].style.display = "none";
function slideToggle(toggle) {
  slides[currentSlide].style.display = "none";
  currentSlide += toggle;
  if(slides.length === currentSlide) currentSlide = 0;
  if(currentSlide < 0) currentSlide = slides.length - 1;
  slides[currentSlide].style.display = "block";;
};
slider.querySelector('.slider__toggle--next').onclick = function() {slideToggle(1)};
slider.querySelector('.slider__toggle--prev').onclick = function() {slideToggle(-1)};


// slider with class add/remove

// var slider = document.querySelector('.slider');
// var slides = slider.querySelectorAll('blockquote');
// var currentSlide = 0;
// function slideToggle(toggle) {
//   slides[currentSlide].classList.remove('show-slide');
//   currentSlide += toggle;
//    if(slides.length === currentSlide) currentSlide = 0;
//    if(currentSlide < 0) currentSlide = slides.length - 1;
//    slides[currentSlide].classList.add('show-slide');
// };

// slider.querySelector('.slider__toggle--next').onclick = function() {slideToggle(1)};
// slider.querySelector('.slider__toggle--prev').onclick = function() {slideToggle(-1)};



//карта с двойным кодом

// var map = document.querySelector('.contacts__map');
// var desktopMap = document.querySelector('.contacts__desktop-map');
// if(document.documentElement.clientWidth <= 1250) {
// window.initMap = function() {
//   var myLatLng = {lat: 59.938800, lng: 30.3229900};

//         // Карта
//   map = new google.maps.Map(document.querySelector('.contacts__map'), {
//     center: {lat: 59.939400, lng: 30.3229900},
//     scrollwheel: true,
//     zoom: 16
//   });

//         // Маркер
//   var image = 'img/icon-map-pin.svg';
//   var marker = new google.maps.Marker({
//     map: map,
//     position: myLatLng,
//     icon: image,
//     draggable: true,
//     animation: google.maps.Animation.DROP,
//     title: 'MishkaShop'
//   });
// }
// } else {
// window.initMap = function() {
//   var myLatLng = {lat: 59.938800, lng: 30.3229900};

//         // Карта
//   desktopMap = new google.maps.Map(document.querySelector('.contacts__desktop-map'), {
//     center: {lat: 59.939400, lng: 30.3229900},
//     scrollwheel: true,
//     zoom: 16
//   });

//         // Маркер
//   var image = 'img/icon-map-pin.svg';
//   var marker = new google.maps.Marker({
//     map: desktopMap,
//     position: myLatLng,
//     icon: image,
//     draggable: true,
//     animation: google.maps.Animation.DROP,
//     title: 'MishkaShop'
//   });
// }
//   }
