'use strict';

$(document).ready(function() {

  //Cache DOM selectors
  const $hamburgerNavbar = $('.hamburger-navbar');
  const $navbar = $('.navbar');
  const $windowSelector = $(window);
  const $bioHeading = $('#bio-heading');
  

  //Toggles navbar on and off if hamburger icon is clicked
  $hamburgerNavbar.on('click', function() {
    $navbar.toggleClass('hide-nav')
  })

  $('.fade-on-scroll').animateOnScroll();
})