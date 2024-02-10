// get date of countdown in milliseconds
let targetDate = new Date("Feb 12 2024, 09:30:00").getTime();

let circleDaysStroke = document.querySelector("#dd");
let circleHoursStroke = document.querySelector("#hh");
let circleMinutesStroke = document.querySelector("#min");
let circleSecondsStroke = document.querySelector("#sec");

let circleDays = document.querySelector("#days");
let circleHours = document.querySelector("#hours");
let circleMinutes = document.querySelector("#minutes");
let circleSeconds = document.querySelector("#seconds");

// set an interval for 1s
let countdown = setInterval(function () {
    // take the actual date in milliseconds
    let actualDate = Date.now();

    // this will be calculated subtract the target time with the actual date
    let difference = targetDate - actualDate;

    // get single value days, hours, minutes and seconds and convert in "real time"
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(difference % (1000 * 60) / 1000);
    let words = ["secondi", "minuti", "ore", "giorni"];

    checkPlural(days, hours, minutes, seconds, words);


    document.querySelector("#days").innerHTML = ` ${days}`;
    document.querySelector("#hours").innerHTML = ` ${hours}`;
    document.querySelector("#minutes").innerHTML = ` ${minutes}`;
    document.querySelector("#seconds").innerHTML = ` ${seconds}`;


    if (difference < 0) {

        document.querySelector("#countdown").innerHTML = `- ${0} ${0} ${0} ${0}`;
    }
    circleDaysStroke.style.strokeDashoffset = 440 - (440 * days) / 365;
    circleHoursStroke.style.strokeDashoffset = 440 - (440 * hours) / 24;
    circleMinutesStroke.style.strokeDashoffset = 440 - (440 * minutes) / 60;
    circleSecondsStroke.style.strokeDashoffset = 440 - (440 * seconds) / 60;
}, 1000)


function checkPlural(days, hours, minutes, seconds, words) {
    if (seconds == 1) {
        words[0] = "secondo";
    }
    if (minutes == 1) {
        words[1] = "minuto";
    }
    if (hours == 1) {
        words[2] = "ora";
    }
    if (days == 1) {
        words[3] = "giorno";
    }
}







