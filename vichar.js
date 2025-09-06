// ===== HERO SLIDER =====
const slides = document.querySelectorAll(".slides img");
let currentIndex = 0;
const intervalTime = 4000;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

setInterval(nextSlide, intervalTime);


// ===== HAMBURGER MENU =====
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburger.classList.toggle("open");
});


// ===== BOOK CAROUSEL =====
const bookBox = document.querySelector(".featured_book_box");
const bookCards = document.querySelectorAll(".featured_book_card");
const prevBtn = document.querySelector(".book-arrow.left");
const nextBtn = document.querySelector(".book-arrow.right");

let scrollIndex = 0;
let cardWidth = bookCards[0].offsetWidth + 20; // card + margin

function updateCarousel() {
  bookBox.style.transform = `translateX(-${scrollIndex * cardWidth}px)`;
}

// Next
nextBtn.addEventListener("click", () => {
  if (scrollIndex < bookCards.length - 1) {
    scrollIndex++;
  } else {
    scrollIndex = 0; // loop
  }
  updateCarousel();
});

// Prev
prevBtn.addEventListener("click", () => {
  if (scrollIndex > 0) {
    scrollIndex--;
  } else {
    scrollIndex = bookCards.length - 1; // loop
  }
  updateCarousel();
});

// Auto scroll every 5s
setInterval(() => {
  nextBtn.click();
}, 5000);


// ===== READ MORE / LESS =====
const moreText = document.getElementById("more-text");
const readMoreBtn = document.getElementById("read-more-btn");
const readLessBtn = document.getElementById("read-less-btn");

if (readMoreBtn && readLessBtn) {
  readMoreBtn.addEventListener("click", () => {
    moreText.style.display = "block";
    readMoreBtn.style.display = "none";
    readLessBtn.style.display = "inline-block";
  });

  readLessBtn.addEventListener("click", () => {
    moreText.style.display = "none";
    readMoreBtn.style.display = "inline-block";
    readLessBtn.style.display = "none";
  });
}


// ===== NEWSLETTER VALIDATION =====
const newsletterForm = document.querySelector(".newsletter form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector("input");
    if (!input.value.includes("@")) {
      alert("Please enter a valid email.");
    } else {
      alert("Thank you for subscribing!");
      input.value = "";
    }
  });
}

