$(document).ready(function () {
  $('.slider-rolagem-horizontal').owlCarousel({
    nav: true,
    navText: '←→',
    dots: false,
    rewind: true,
    margin: 0,
    responsive: {
      0: {
        items: 1
      }
    }
  });

  const scrollLeft = $('.owl-prev');
  const scrollRight = $('.owl-next');

  scrollLeft.hide(); // Exibe a seta para a direita

  scrollRight.click(function () {
    scrollLeft.show(); // Exibe a seta para a esquerda
    scrollRight.hide(); // Exibe a seta para a direita
  });

  scrollLeft.click(function () {
    scrollRight.show(); // Exibe a seta para a direita
    scrollLeft.hide(); // Exibe a seta para a direita
  });
});
