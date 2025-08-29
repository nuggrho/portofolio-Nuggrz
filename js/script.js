console.log("tes");

// Sidebar Toggle
const sidebar = document.querySelector(".sidebar");
const hamburger = document.querySelector(".hamburger");
const menuWrapper = document.querySelector(".menu-wrapper");
const bigOverlay = document.querySelector(".big-overlay");

function toggleSidebar() {
  sidebar.classList.toggle("close");
  menuWrapper.classList.toggle("close");
  // hamburger.classList.toggle("close")
  document.querySelector(".short-bio").classList.toggle("close");
  document.querySelector(".top-nav").classList.toggle("extend");
  document.querySelector(".big-overlay").classList.toggle("close");
  document.querySelector("body").classList.toggle("freeze");
  document.querySelector(".hamburger").classList.toggle("open");
}

hamburger.addEventListener("click", () => {
  toggleSidebar();
});

bigOverlay.addEventListener("click", () => {
  toggleSidebar();
});

const menus = document.querySelectorAll(".nav-menu");

menus.forEach((menu) => {
  menu.addEventListener("click", () => {
    toggleSidebar();
  });
});

window.addEventListener("load", function () {
  const loader = document.getElementById("loading-screen");

  // Tunda selama 6000ms (6 detik) agar sinkron dengan progress bar
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 800);  
  }, 5000); // <-- durasi total tampil
});

// Optional: Dynamic typing text (jika tidak pakai CSS animation)
const typingText = document.getElementById("typing-text");
const text = "@nugroho_design";
let index = 0;

function typeChar() {
  if (index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeChar, 70);
  }
}

typeChar();

document.body.addEventListener("mousedown", () => {
  document.body.classList.add("clicked-cursor");
});
document.body.addEventListener("mouseup", () => {
  document.body.classList.remove("clicked-cursor");
});

document.querySelectorAll(".project-card").forEach((card) => {
  VanillaTilt.init(card, {
    max: 15,
    speed: 300,
    glare: true,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible"); // Untuk fade out
      }
    });
  }, {
    threshold: 0.1 // Elemen muncul 10% di layar
  });

  const fadeElements = document.querySelectorAll(".fade-element");
  fadeElements.forEach(el => observer.observe(el));
});
