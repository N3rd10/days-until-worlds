function updateCountdown() {
    const targetDate = new Date("2025-04-15T20:00:00");
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
        document.getElementById('countdown').innerText = "Worlds!!!!!";
        document.getElementById('countdown').classList.add('large-text');
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    const milliseconds = timeDifference % 1000;

    document.getElementById('countdown').innerText = 
        `${days}d ${hours}h ${minutes}m ${seconds}s ${milliseconds}ms`;
}

setInterval(updateCountdown, 1);
