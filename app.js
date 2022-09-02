const secondshand = document.getElementById('seconds-hand');
const minuteshand = document.getElementById('minutes-hand');
const hourshand = document.getElementById('hours-hand');

const SEC_TIME_INTERVAL = 6;

function getTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12;

    secondshand.style.transform = 'rotate(' + (seconds * SEC_TIME_INTERVAL) + 'deg)';
    minuteshand.style.transform = 'rotate(' + (minutes * SEC_TIME_INTERVAL + seconds / 10) + 'deg)';
    hourshand.style.transform = 'rotate(' + (hours * 30 + minutes / 2) + 'deg)';
}

setInterval(getTime, 100);