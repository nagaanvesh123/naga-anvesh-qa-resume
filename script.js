// Reveal Animation
window.addEventListener("scroll", function () {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
});

// Typing Effect
const typingElement = document.querySelector(".typing");
const texts = [
  "Manual Testing Specialist",
  "API Testing Expert",
  "Automation Enthusiast",
  "Agile QA Professional"
];

let textIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < texts[textIndex].length) {
    typingElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 70);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 40);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeEffect, 300);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(typeEffect, 500);
});

// Active Navbar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Particles
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    color: { value: "#ff3c3c" },
    line_linked: { enable: true, color: "#ff3c3c", opacity: 0.3 },
    move: { speed: 2 }
  }
});
