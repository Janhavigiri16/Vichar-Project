document.addEventListener("DOMContentLoaded", () => {
  /* ===================== */
  /* Animate on Scroll */
  /* ===================== */
  const elements = document.querySelectorAll("[data-animate]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target); // Animate once
        }
      });
    },
    { threshold: 0.15 }
  );
  elements.forEach((el) => observer.observe(el));

  /* ===================== */
  /* Read More / Read Less */
  /* ===================== */
  const moreText = document.getElementById("more-text");
  const readMoreBtn = document.getElementById("read-more-btn");
  const readLessBtn = document.getElementById("read-less-btn");

  if (readMoreBtn && readLessBtn && moreText) {
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
  }

  /* ===================== */
  /* Newsletter */
  /* ===================== */
  const newsletterForm = document.querySelector(".newsletter form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailInput = newsletterForm.querySelector("input[type='email']");
      const msg = document.createElement("p");
      msg.id = "newsletterMsg";
      newsletterForm.after(msg);

      if (
        emailInput.value.trim() === "" ||
        !emailInput.value.includes("@")
      ) {
        msg.textContent = "Please enter a valid email.";
        msg.className = "error";
      } else {
        msg.textContent = "Thank you for subscribing!";
        msg.className = "success";
        emailInput.value = "";
      }
    });
  }

  /* ===================== */
  /* Hero Slider */
  /* ===================== */
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

  if (slides.length > 0) {
    showSlide(currentIndex);
    setInterval(nextSlide, intervalTime);
  }

  /* ===================== */
  /* Hamburger Menu */
  /* ===================== */
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  /* ===================== */
  /* Review Books Carousel */
  /* ===================== */
  const bookBox = document.querySelector(".featured_book_box");
  const bookCards = document.querySelectorAll(".featured_book_card");
  const prevBtn = document.getElementById("prevBook");
  const nextBtn = document.getElementById("nextBook");

  let currentBook = 0;
  let booksPerView = window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 4;

  function updateBooksPerView() {
    booksPerView = window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 4;
    showBook(currentBook);
  }

  function showBook(index) {
    if (bookBox) {
      const cardWidth = bookCards[0].offsetWidth + 40; // card + margin
      bookBox.style.transform = `translateX(-${index * cardWidth}px)`;
    }
  }

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
      currentBook = (currentBook + 1) % bookCards.length;
      showBook(currentBook);
    });

    prevBtn.addEventListener("click", () => {
      currentBook = (currentBook - 1 + bookCards.length) % bookCards.length;
      showBook(currentBook);
    });
  }

  window.addEventListener("resize", updateBooksPerView);
  updateBooksPerView();
});
