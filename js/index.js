$(document).ready(function() {
  $('.nav button').click(function() {
    $('.nav ul').toggleClass('active')
  })
  $('.nav .nav-links a').click(function() {
    $('.nav ul').removeClass('active')
  })
})

$('div').tubular({
 videoId : '9DNIXolDEME',
 mute: false,
 
 
});