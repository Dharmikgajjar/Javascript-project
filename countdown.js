
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");


const newYearTime = new Date("Jan 1, 2027 00:00:00").getTime();


const updateCountdown = () => {

    const currentDate = new Date();
    const now = currentDate.getTime();


    const gap = newYearTime - now;


    const oneSecond = 1000;
    const oneMinute = oneSecond * 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;


    const daysLeft = String(gap / oneDay).split(".")[0];
    const hoursLeft = String((gap - (daysLeft * oneDay)) / oneHour).split(".")[0];
    const minutesLeft = String((gap - (daysLeft * oneDay) - (hoursLeft * oneHour)) / oneMinute).split(".")[0];
    const secondsLeft = String((gap - (daysLeft * oneDay) - (hoursLeft * oneHour) - (minutesLeft * oneMinute)) / oneSecond).split(".")[0];


    dayEl.innerText = daysLeft;
    hourEl.innerText = hoursLeft;
    minuteEl.innerText = minutesLeft;
    secondEl.innerText = secondsLeft;


    setTimeout(() => updateCountdown(), 1000);
};


updateCountdown();