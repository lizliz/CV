$(document).ready(function() {
  //Menu scripts
  var $menu = $('#menu');
  var $menulink = $('.menu__link');
  
  $menulink.click(function() {
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    return false;
  });
});