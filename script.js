// =========================================
// DOM ELEMENTS
// =========================================

const proposalScreen = document.getElementById("proposalScreen");
const rejectionScreen = document.getElementById("rejectionScreen");
const celebrationScreen = document.getElementById("celebrationScreen");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const backBtn = document.getElementById("backBtn");

const musicToggle = document.getElementById("musicToggle");
const musicIcon = document.querySelector(".music-icon");
const bgMusic = document.getElementById("bgMusic");


// =========================================
// INITIALIZE
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    createFloatingHearts();
    createStars();

    setupEventListeners();

    showScreen("proposalScreen");

});


// =========================================
// EVENT LISTENERS
// =========================================

function setupEventListeners() {

    yesBtn.addEventListener("click", handleYesClick);

    noBtn.addEventListener("click", handleNoClick);

    backBtn.addEventListener("click", handleBackClick);

    celebrationBackBtn.addEventListener("click", handleBackClick);

    musicToggle.addEventListener("click", toggleMusic);

}


// =========================================
// SCREEN MANAGEMENT
// =========================================

function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const targetScreen = document.getElementById(screenId);

    if (targetScreen) {
        targetScreen.classList.add("active");
    }

}


// =========================================
// YES BUTTON
// =========================================

function handleYesClick() {

    console.log("YES button clicked ❤️");

    const container =
        celebrationScreen.querySelector(".confetti-container");

    createConfetti(container);

    createHeartExplosion(container);

    setTimeout(() => {

        showScreen("celebrationScreen");

    }, 100);

}


// =========================================
// NO BUTTON
// =========================================

function handleNoClick() {

    console.log("NO button clicked 😏");

    showScreen("rejectionScreen");

}


// =========================================
// BACK BUTTON
// =========================================

function handleBackClick() {

    console.log("Back button clicked");

    showScreen("proposalScreen");

}


// =========================================
// FLOATING HEARTS
// =========================================

function createFloatingHearts() {

    const container =
        document.querySelector(".floating-hearts-container");

    const hearts = [
        "💕",
        "💖",
        "💗",
        "💓",
        "💞",
        "❤️"
    ];

    const heartCount = 20;

    for (let i = 0; i < heartCount; i++) {

        const heart = document.createElement("div");

        heart.className = "floating-heart";

        heart.textContent =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.animationDuration =
            (6 + Math.random() * 4) + "s";

        heart.style.animationDelay =
            Math.random() * 6 + "s";

        heart.style.fontSize =
            (1 + Math.random() * 1.5) + "rem";

        container.appendChild(heart);

    }

}


// =========================================
// STARS
// =========================================

function createStars() {

    const container =
        document.querySelector(".stars");

    const starCount = 60;

    for (let i = 0; i < starCount; i++) {

        const star = document.createElement("div");

        star.className = "star";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        container.appendChild(star);

    }

}


// =========================================
// CONFETTI
// =========================================

function createConfetti(container) {

    if (!container) return;

    container.innerHTML = "";

    const colors = [
        "#ff6b9d",
        "#ff4757",
        "#ffa502",
        "#ffd93d",
        "#a29bfe",
        "#667eea",
        "#00cec9"
    ];

    const pieces = 70;

    for (let i = 0; i < pieces; i++) {

        const confetti =
            document.createElement("div");

        confetti.className = "confetti";

        const size =
            5 + Math.random() * 10;

        const startX =
            Math.random() * 100;

        const endX =
            (Math.random() - 0.5) * 400;

        const rotation =
            Math.random() * 720;

        const duration =
            2 + Math.random() * 2;

        const delay =
            Math.random() * 0.4;

        confetti.style.left =
            startX + "%";

        confetti.style.width =
            size + "px";

        confetti.style.height =
            size + "px";

        confetti.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];

        const animationName =
            "confettiAnimation" + i;

        const style =
            document.createElement("style");

        style.textContent = `
            @keyframes ${animationName} {

                0% {
                    transform:
                        translateY(-20px)
                        translateX(0)
                        rotate(0deg);

                    opacity: 1;
                }

                100% {
                    transform:
                        translateY(110vh)
                        translateX(${endX}px)
                        rotate(${rotation}deg);

                    opacity: 0;
                }

            }
        `;

        document.head.appendChild(style);

        confetti.style.animation =
            `${animationName} ${duration}s ease-out ${delay}s forwards`;

        container.appendChild(confetti);

    }

}


// =========================================
// HEART EXPLOSION
// =========================================

function createHeartExplosion(container) {

    if (!container) return;

    const hearts = [
        "💕",
        "💖",
        "💗",
        "💓",
        "💞",
        "❤️"
    ];

    const heartCount = 35;

    for (let i = 0; i < heartCount; i++) {

        const heart =
            document.createElement("div");

        heart.textContent =
            hearts[
                Math.floor(
                    Math.random() * hearts.length
                )
            ];

        heart.style.position = "absolute";

        heart.style.left = "50%";

        heart.style.top = "50%";

        heart.style.fontSize =
            (1.3 + Math.random() * 1.2) + "rem";

        heart.style.pointerEvents = "none";

        const angle =
            (i / heartCount) *
            Math.PI *
            2;

        const distance =
            100 + Math.random() * 180;

        const endX =
            Math.cos(angle) * distance;

        const endY =
            Math.sin(angle) * distance;

        const animationName =
            "heartExplosion" + i;

        const style =
            document.createElement("style");

        style.textContent = `
            @keyframes ${animationName} {

                0% {
                    transform:
                        translate(-50%, -50%)
                        scale(1);

                    opacity: 1;
                }

                100% {
                    transform:
                        translate(
                            calc(-50% + ${endX}px),
                            calc(-50% + ${endY}px)
                        )
                        scale(0.3);

                    opacity: 0;
                }

            }
        `;

        document.head.appendChild(style);

        heart.style.animation =
            `${animationName} 1.5s ease-out forwards`;

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1800);

    }

}


// =========================================
// MUSIC
// =========================================

let musicPlaying = false;

async function toggleMusic() {

    if (!bgMusic) return;

    if (musicPlaying) {

        bgMusic.pause();

        musicPlaying = false;

        musicIcon.textContent = "🔇";

        musicToggle.classList.add("muted");

        return;
    }


    try {

        await bgMusic.play();

        musicPlaying = true;

        musicIcon.textContent = "🔊";

        musicToggle.classList.remove("muted");

    } catch (error) {

        console.log(
            "Music could not be played. Make sure music.mp3 exists."
        );

        musicIcon.textContent = "🔇";

    }

}


// =========================================
// KEYBOARD SUPPORT
// =========================================

document.addEventListener("keydown", event => {

    const activeScreen =
        document.querySelector(".screen.active");

    if (!activeScreen) return;


    // Proposal
    if (activeScreen === proposalScreen) {

        if (
            event.key === "Enter" ||
            event.key.toLowerCase() === "y"
        ) {

            handleYesClick();

        }

        if (
            event.key.toLowerCase() === "n"
        ) {

            handleNoClick();

        }

    }


    // Rejection
    else if (activeScreen === rejectionScreen) {

        if (
            event.key === "Enter" ||
            event.key === "Backspace"
        ) {

            handleBackClick();

        }

    }


    // Celebration
    else if (activeScreen === celebrationScreen) {

        if (event.key === "Enter") {

            handleSurpriseClick();

        }

    }

});
