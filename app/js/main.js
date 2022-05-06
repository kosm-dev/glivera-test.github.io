$(function () {

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('.header__menu-close').addClass('header__menu-close--active');
    $('body').addClass('hide');
  });
  $('.header__menu-close').on('click', function () {
    $('.header__menu-close').removeClass('header__menu-close--active');
    $('.menu__list').removeClass('menu__list--active');
    $('body').removeClass('hide');
  });

});