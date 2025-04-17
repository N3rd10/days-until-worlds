// Countdown Timer Logic
function updateCountdown() {
    const targetDate = new Date("2026-04-14T20:00:00");
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

// Start countdown timer
setInterval(updateCountdown, 1);

// Sprite Animation Logic (Preventing Bottom Stuck Issue)
document.addEventListener("DOMContentLoaded", () => {
    const sprite = document.getElementById("sprite");
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    function getRandomYPosition() {
        return Math.floor(Math.random() * (screenHeight * 0.8)) + "px"; // Avoid bottom boundary
    }

    function getRandomXPosition() {
        return Math.floor(Math.random() * (screenWidth * 0.8)) + "px"; // Avoid side boundaries
    }

    function getRandomDelay() {
        return Math.floor(Math.random() * (15000 - 5000) + 5000); // Random delay between 5-15 seconds
    }

    function moveSprite() {
        const entryDirection = Math.random(); // Randomly selects side, top, or bottom

        if (entryDirection < 0.25) {
            // Enter from Left
            sprite.style.top = getRandomYPosition();
            sprite.style.left = `-100px`;
            setTimeout(() => sprite.style.left = `200px`, 500);
            setTimeout(() => sprite.style.left = `-100px`, 1000);
        } else if (entryDirection < 0.5) {
            // Enter from Right
            sprite.style.top = getRandomYPosition();
            sprite.style.left = `${screenWidth}px`;
            setTimeout(() => sprite.style.left = `${screenWidth - 200}px`, 500);
            setTimeout(() => sprite.style.left = `${screenWidth}px`, 1000);
        } else if (entryDirection < 0.75) {
            // Enter from Top
            sprite.style.left = getRandomXPosition();
            sprite.style.top = `-100px`;
            setTimeout(() => sprite.style.top = `200px`, 500);
            setTimeout(() => sprite.style.top = `-100px`, 1000);
        } else {
            // Enter from Bottom (Fixed to prevent sticking!)
            sprite.style.left = getRandomXPosition();
            sprite.style.top = `${screenHeight}px`; // Start fully off-screen
            setTimeout(() => sprite.style.top = `${screenHeight - 250}px`, 500); // Moves in slightly
            setTimeout(() => sprite.style.top = `${screenHeight + 100}px`, 1000); // Moves off-screen to avoid sticking
        }

        setTimeout(moveSprite, getRandomDelay());
    }

    sprite.style.left = `-100px`;
    sprite.style.top = `-100px`;
    setTimeout(moveSprite, getRandomDelay());
});
