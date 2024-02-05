var cdays = document.getElementById("cdays");
var chours = document.getElementById("chours");
var cmin = document.getElementById("cminutes");
var csec = document.getElementById("cseconds");

var weddingDate = new Date('06/22/2024 0:00 PM');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;

var countdown;

function setCountdown() {
    var now = new Date();
    var distance = weddingDate - now;
    if (distance < 0) {
        clearInterval(countdown);
        return;
    }

    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    cdays.innerHTML = days;
    chours.innerHTML = hours;
    cmin.innerHTML = minutes;
    csec.innerHTML = seconds;
}

function actualizeTime() {
    setCountdown();
    countdown = setInterval(setCountdown, 1000);
}

