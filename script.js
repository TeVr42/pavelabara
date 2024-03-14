var cdays = document.getElementById("cdays");
var tdays = document.getElementById("tdays");
var chours = document.getElementById("chours");
var thours = document.getElementById("thours");
var cmin = document.getElementById("cminutes");
var tmin = document.getElementById("tminutes");
var csec = document.getElementById("cseconds");
var tsec = document.getElementById("tseconds");

var weddingDate = new Date('06/22/2024 1:00 PM');

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

    if (days < 5 && days >= 2) {
        tdays.innerHTML = "dny";
    } else if (days == 1) {
        tdays.innerHTML = "den";
    } else {
        tdays.innerHTML = "dní";
    }

    if (hours < 5 && hours >= 2) {
        thours.innerHTML = "hodiny";
    } else if (hours == 1) {
        thours.innerHTML = "hodina";
    } else {
        thours.innerHTML = "hodin";
    }

    if (minutes < 5 && minutes >= 2) {
        tmin.innerHTML = "minuty";
    } else if (minutes == 1) {
        tmin.innerHTML = "minuta";
    } else {
        tmin.innerHTML = "minut";
    }

    if (seconds < 5 && seconds >= 2) {
        tsec.innerHTML = "sekundy";
    } else if (seconds == 1) {
        tsec.innerHTML = "sekunda";
    } else {
        tsec.innerHTML = "sekund";
    }

}

function actualizeTime() {
    setCountdown();
    countdown = setInterval(setCountdown, 500);
}

