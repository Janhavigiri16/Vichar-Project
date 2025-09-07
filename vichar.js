
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-in");
                observer.unobserve(entry.target); // Animate once
            }
        });
    }, { threshold: 0.15 });

    elements.forEach(el => observer.observe(el));
});


// Toggle Read More / Read Less
document.addEventListener("DOMContentLoaded", function () {
    const moreText = document.getElementById("more-text");
    const readMoreBtn = document.getElementById("read-more-btn");
    const readLessBtn = document.getElementById("read-less-btn");

    readMoreBtn.addEventListener("click", function () {
        moreText.style.display = "block";
        readMoreBtn.style.display = "none";
        readLessBtn.style.display = "inline-block";
    });

    readLessBtn.addEventListener("click", function () {
        moreText.style.display = "none";
        readMoreBtn.style.display = "inline-block";
        readLessBtn.style.display = "none";
    });
});


document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.boxShadow = "0 0 15px rgba(177,116,233,0.8)";
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    });
});


const newsletterForm = document.querySelector(".newsletter form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const emailInput = newsletterForm.querySelector("input[type='email']");
    const msg = document.createElement("p");
    msg.id = "newsletterMsg";
    newsletterForm.after(msg);

    if (emailInput.value.trim() === "" || !emailInput.value.includes("@")) {
      msg.textContent = "Please enter a valid email.";
      msg.className = "error";
    } else {
      msg.textContent = "Thank you for subscribing!";
      msg.className = "success";
      emailInput.value = "";
    }
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slides img");
  let currentIndex = 0;
  const intervalTime = 4000; // 4 seconds

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  if (slides.length > 0) {
    showSlide(currentIndex); // Show first slide
    setInterval(nextSlide, intervalTime);
  }
});


// Toggle mobile menu
// ===== Hamburger Menu =====
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }
});

// ===== Review Books Carousel =====
const bookBox = document.querySelector(".featured_book_box");
const bookCards = document.querySelectorAll(".featured_book_card");

let currentBook = 0;

function showBook(index) {
  if (bookBox) {
    bookBox.style.transform = `translateX(-${index * 100}%)`;
  }
}

// Next / Prev Buttons
document.getElementById("nextBook")?.addEventListener("click", () => {
  currentBook = (currentBook + 1) % bookCards.length;
  showBook(currentBook);
});

document.getElementById("prevBook")?.addEventListener("click", () => {
  currentBook = (currentBook - 1 + bookCards.length) % bookCards.length;
  showBook(currentBook);
});

