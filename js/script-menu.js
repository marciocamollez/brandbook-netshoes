$(function () {
  // Dropdown toggle
  $('.dropdown-toggle').click(function (e) {
    $(this).next('.dropdown').toggle();
    e.preventDefault();
  });

  // Submenu toggle
  $('.subitem').click(function (e) {
    $(this).next('.submenu').toggle();
    e.preventDefault();
  });

  /*$(document).click(function (e) {
    var target = e.target;
    if (
      !$(target).is('.dropdown-toggle') &&
      !$(target).parents().is('.dropdown-toggle')
    ) {
      $('.dropdown').hide();
    }
  });*/
});
