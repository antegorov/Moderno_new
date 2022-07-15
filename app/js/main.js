$(function() {

  $('.product-slider__inner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4
  });

  $(".rate-star").rateYo({
    rating: 4,
    starWidth: "12px",
    readOnly: true
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    from: 0,
    to: 600,
    prefix: "$",
  });

  $('.catalog__filter-button').on('click', function() {
    $('.catalog__filter-button').removeClass('button__active');
    $(this).addClass('button__active');
  });

  $('.icon-sort').on('click', function() {
    $('.icon-sort').removeClass('icon-sort__active');
    $(this).addClass('icon-sort__active');
  });

  $('.icon-th-list').on('click', function() {
    $('.product__page-item').addClass('active__list-item')
  });

  $('.icon-th-large').on('click', function() {
    $('.product__page-item').removeClass('active__list-item')
  });


  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  });

  $('.header__btn-menu').on('click', function(){
    $('.header__box').toggleClass('active')
  });
    



  var mixer = mixitup('.product__inner-box');
});