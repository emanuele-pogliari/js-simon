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
    document.querySelector("#countdown").innerHTML = `${days} ${hours} ${minutes} ${seconds}`;

}, 1000)






