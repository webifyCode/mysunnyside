$(document).ready(function() {
$('#hamburger').on('click', function() {
  $('#navlist').slideDown('fast');
  $('#hamburger').hide();
  $('#close').show();
});
$('#close').on('click', function() {
  $('#navlist').slideUp('fast');
  $('#close').hide();
  $('#hamburger').show();
});
});




