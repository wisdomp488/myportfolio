// Navbar toggle functionality
// const deploy = document.getElementById('Town');
// const develop = document.getElementById('Home');


// function greeCee() {
//   document.getElementById('Home').style.display = "none";
//   document.getElementById('Town').style.display = "block";
//   document.getElementById('Llona').style.display = "flex";
// }

// function secTion() {
//   document.getElementById('Home').style.display = "block";
//   document.getElementById('Town').style.display = "none";
//   document.getElementById('Llona').style.display = "none";
// }

// Fancy text typing animation
const fancyTextStrings = ['Front-End Developer', 'UI/UX Designer', 'Full-Stack Developer', 'React Developer'];
let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;
const textElement = document.querySelector('.eael-fancy-text-strings');
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseDuration = 2000;

function type() {
  const currentString = fancyTextStrings[currentIndex];
  textElement.textContent = currentString.substring(0, charIndex);
  textElement.classList.add('typing-cursor');

  if (!isDeleting && charIndex < currentString.length) {
    charIndex++;
    setTimeout(type, typingSpeed);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, deletingSpeed);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      currentIndex = (currentIndex + 1) % fancyTextStrings.length;
    }
    textElement.classList.toggle('typing-cursor', !isDeleting);
    setTimeout(type, isDeleting ? typingSpeed : pauseDuration);
  }
}

// Start the typing animation
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(type, 1000);
});

// Typing effect for hero section
document.addEventListener("DOMContentLoaded", () => {
  const text = "Welcome to my world of coding as a { Web Dev }";
  const typingElement = document.getElementById("typingEffect");
  let index = 0;

  function typeHeroText() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeHeroText, 100); // Adjust typing speed here (100ms per character)
    }
  }

  // Add md:px-15 to the typing element
  typingElement.classList.add('md:px-17');

  typeHeroText();
});

// Particles.js Configuration
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

// Hamburger Menu Toggle for Mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('hidden');
  menuToggle.textContent = navLinks.classList.contains('hidden') ? '☰' : '✕';
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu after clicking a link
      if (!navLinks.classList.contains('hidden')) {
        navLinks.classList.add('hidden');
        menuToggle.textContent = '☰';
      }
    }
  });
});

// Project Card Hover Animation (Reset transform to avoid Tailwind conflict)
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-4px)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});


console.log("🚀 Welcome, fellow debugger! Let's build something amazing.");
