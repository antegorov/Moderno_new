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
    to: 1000,
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
    

  $('.product-one__tabs .tab, settings__tabs .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.product-one__tabs, settings__tabs').find('.tab-item').removeClass('active-tab').hide();
      $('.product-one__tabs .tabs, settings__tabs .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    });



  var mixer = mixitup('.product__inner-box');
});