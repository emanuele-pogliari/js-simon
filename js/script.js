// get date of countdown in milliseconds
let targetDate = new Date("Feb 12 2024, 11:00:00").getTime();

// select the countdown container, every circle and every stroke circle that will be modified
countdownElement = document.querySelector("#countdown");

let circleDaysStroke = document.querySelector("#dd");
let circleHoursStroke = document.querySelector("#hh");
let circleMinutesStroke = document.querySelector("#min");
let circleSecondsStroke = document.querySelector("#sec");

let circleDays = document.querySelector("#days");
let circleHours = document.querySelector("#hours");
let circleMinutes = document.querySelector("#minutes");
let circleSeconds = document.querySelector("#seconds");

// select container fireworks

let activateFireworks = document.querySelector(".fireworks-container");

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
    let words = ["days", "hours", "minutes", "seconds"];

    // call function that will check if every single data remaing is equals to 1
    checkSingular(days, hours, minutes, seconds, words);

    // assign data to every circles
    circleDays.innerHTML = `${days}`;
    circleHours.innerHTML = ` ${hours}`;
    circleMinutes.innerHTML = `${minutes}`;
    circleSeconds.innerHTML = ` ${seconds}`;

    // assign text value under every circle
    for (let i = 0; i < words.length; i++) {
        document.querySelectorAll(".word")[i].innerHTML = `${words[i]}`
    }

    // if the difference between actual date and data target is negative this condition will stop the interval function and will activate fireworks, also shows messages
    if (difference < 0) {

        clearInterval(countdown);

        document.querySelector("#countdown").innerHTML = `- ${"00"} ${"00"}:${"00"}:${"00"}`;
        activateFireworks.style.opacity = 1;
        countdownElement.classList.add("count-over");
        document.querySelector(".title").innerHTML = "Good Morning!"
        document.querySelector(".title").classList.add("count-over-text");
    }
    // adapt every stroke to the time remaing.
    circleDaysStroke.style.strokeDashoffset = 440 - (440 * days) / 28;
    circleHoursStroke.style.strokeDashoffset = 440 - (440 * hours) / 24;
    circleMinutesStroke.style.strokeDashoffset = 440 - (440 * minutes) / 60;
    circleSecondsStroke.style.strokeDashoffset = 440 - (440 * seconds) / 60;
}, 1000)

// function that will check if single data time is equals to 1 and change plural words to singular
function checkSingular(days, hours, minutes, seconds, words) {
    if (days == 1) {
        words[0] = "day";
    }
    if (hours == 1) {
        words[1] = "hour";
    }
    if (minutes == 1) {
        words[2] = "minute";
    }
    if (seconds == 1) {
        words[3] = "second";
    }
}







