/**
 * Quick-edit configuration.
 * Change these strings/images and you're done.
 */
const CONFIG = {
  envelopeCaption: "♡ Письмо для Лизы ♡",
  question: "Ты будешь моей Валентинкой?",
  yesTitle: "Ураа!",
  catBefore: "assets/cat_heart.gif",
  catAfter: "assets/cat_dance.gif",
  noMoveDistancePx: 220, // how far the NO button jumps
};

// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const letterWindow = document.querySelector(".letter-window");

const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Apply config to static text
const envelopeCaptionEl = document.querySelector(".envelope-caption");
if (envelopeCaptionEl) envelopeCaptionEl.textContent = CONFIG.envelopeCaption;

title.textContent = CONFIG.question;
catImg.src = CONFIG.catBefore;

// Open Envelope
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  // Let layout settle then animate
  setTimeout(() => {
    letterWindow.classList.add("open");
  }, 50);
});

// Move the NO button on hover (desktop) / touchstart (mobile)
function dodgeNoButton() {
  const distance = CONFIG.noMoveDistancePx;
  const angle = Math.random() * Math.PI * 2;

  const moveX = Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;

  noBtn.style.transition = "transform 0.25s ease";
  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
}

noBtn.addEventListener("mouseover", dodgeNoButton);
noBtn.addEventListener("touchstart", (e) => {
  // prevent click-through on mobile
  e.preventDefault();
  dodgeNoButton();
});

// YES clicked
yesBtn.addEventListener("click", () => {
  title.textContent = CONFIG.yesTitle;
  catImg.src = CONFIG.catAfter;

  letterWindow.classList.add("final");
  buttons.style.display = "none";

  finalText.hidden = false;
});
