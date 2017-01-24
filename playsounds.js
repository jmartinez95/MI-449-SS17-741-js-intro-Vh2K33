var clapElement = document.getElementById('clap-button');
var kickElement = document.getElementById('kick-button');
var tinkElement = document.getElementById('tink-button');
var clap = new Audio('sounds/clap.wav');
var kick = new Audio('sounds/kick.wav');
var tink = new Audio('sounds/tink.wav');

clapElement.addEventListener('mouseenter', function() {
  clap.play();
});
clapElement.addEventListener('click', function() {
  clap.play();
});

kickElement.addEventListener('mouseenter', function() {
  kick.play();
});
kickElement.addEventListener('click', function() {
  kick.play();
});

tinkElement.addEventListener('mouseenter', function() {
  tink.play();
});
tinkElement.addEventListener('click', function() {
  tink.play();
});