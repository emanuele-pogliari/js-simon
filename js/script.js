// get date of countdown in milliseconds
let targetDate = new Date("Feb 12 2024, 09:30:00").getTime();
console.log(targetDate);

// set an interval for 1s
let countdown = setInterval(function () {
    // take the actual date in milliseconds
    let actualDate = Date.now();
    console.log(actualDate);

    // this will be calculated subtract the target time with the actual date
    let difference = targetDate - actualDate;

    // get single value days, hours, minutes and seconds and convert in "real time"
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(difference % (1000 * 60) / 1000);
    let words = ["secondi", "minuti", "ore", "giorni"];

    checkPlural(days, hours, minutes, seconds, words);


    document.querySelector("#countdown").innerHTML = `- ${days} ${words[3]} ${hours} ${words[2]} ${minutes} ${words[1]} ${seconds} ${words[0]}`;


    if (difference < 0) {

        document.querySelector("#countdown").innerHTML = `- ${0} ${0} ${0} ${0}`;
    }
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





