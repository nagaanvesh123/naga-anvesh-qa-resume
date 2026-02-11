// PARTICLES
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    size: { value: 3 },
    color: { value: "#ff3c3c" },
    line_linked: {
      enable: true,
      color: "#ff3c3c",
      opacity: 0.3
    },
    move: { speed: 2 }
  }
});

// Typing Animation
const typingText = document.querySelector(".typing");
const words = ["Manual Testing Specialist", "API Testing Expert", "Automotive IVI QA", "Agile Practitioner"];
let wordIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < words[wordIndex].length) {
    typingText.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 200);
  }
}

typeEffect();

// Scroll Reveal
window.addEventListener("scroll", function() {
  document.querySelectorAll(".reveal").forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});
