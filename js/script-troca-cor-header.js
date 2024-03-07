$(document).ready(function () {
  // Quando a página é carregada, a primeira seção está em foco
  $('.cabecalho').addClass('header-cor-branca');

  // Ao rolar a página, verifique qual seção está em foco
  $(window).scroll(function () {
    var secao_com_img = $('.secao_com_img').offset().top;
    var secao_sem_img = $('.secao_sem_img').offset().top;
    var scrollTop = $(document).scrollTop();

    if (scrollTop >= secao_com_img && scrollTop < secao_sem_img) {
      $('.cabecalho').addClass('header-cor-branca');
      $('.cabecalho').removeClass('header-cor-preta');
      $('.title-menu h1').css('color', '#FFF');
      $('.header-fixo').css('background', 'transparent');
    } else {
      $('.cabecalho').addClass('header-cor-preta');
      $('.cabecalho').removeClass('header-cor-branca');
      $('.title-menu h1').css('color', '#000');
      $('.header-fixo').css('background', '#FFF');
    }
  });
});
