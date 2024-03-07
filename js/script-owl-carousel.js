$('.custom-carousel').owlCarousel({
  autoWidth: true,
  loop: true,
  responsive: {
    0: {
      items: 1,
      center: true
    },
    767: {
      items: 3,
      center: false
    }
  }
});
$(document).ready(function () {
  $('.custom-carousel .item').click(function () {
    $('.custom-carousel .item').not($(this)).removeClass('active');
    $(this).toggleClass('active');
  });
});
