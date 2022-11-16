// Christmas Light
const circle = document.getElementsByClassName('circle')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const btn = document.getElementById('submit')
const title = document.getElementById('title')
var len = circle.length;

const on = function() {
  for (var i = 0; i < len; i++) {
    circle[i].removeAttribute("style");
    circle[i].style.animationPlayState = "running";
    circle[i].style.WebkitAnimationPlayState = "running";
  }
}

const off = function() {
  title.style.animation = "none";

  for (var i = 0; i < len; i++) {
    circle[i].style.animation = "none";
    circle[i].style.background = "#563260";
  }
}

function convert() {
  var speed = document.getElementById('quantity').value;
  for (var i = 0; i < len; i++) {
    circle[i].style.animationDuration = speed + "s";
  }
}

play.addEventListener('click', on);
stop.addEventListener('click', off);

function countdown() {
  let now = new Date();
  let evenDate = new Date(2022, 10, 31);

  let actualTime = now.getTime();
  let eventTime = evenDate.getTime();
  let remTime = eventTime - actualTime;

  let s = Math.floor(remTime / 1000);
  let m = Math.floor(s / 60);
  let h = Math.floor(m / 60);
  let d = Math.floor(h / 24);

  h %= 24;
  m %= 60;
  s %= 60;

  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  document.querySelector('#days').textContent = d;
  document.querySelector('#hours').textContent = h;
  document.querySelector('#minutes').textContent = m;
  document.querySelector('#seconds').textContent = s;

  setTimeout(countdown, 1000)


};

countdown();