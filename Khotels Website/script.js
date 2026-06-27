/* ====== Nav bar ====== */


const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* ====== Nav bar End ====== */



const slides = document.querySelectorAll('.hero img');
const dots = document.querySelectorAll('.carousel-dots span');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  current = index;
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => showSlide(i));
});

// Auto change every 5s
setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);




(function () {
  let currentSlideIndex = 0;
  const allSlides = document.querySelectorAll('.khotel-slide');
  const allDots = document.querySelectorAll('.khotel-dot');
  const slideCount = allSlides.length;

  function displaySlide(n) {
    allSlides.forEach(slide => slide.classList.remove('active-slide'));
    allDots.forEach(dot => dot.classList.remove('dot-active'));

    currentSlideIndex = (n + slideCount) % slideCount;

    allSlides[currentSlideIndex].classList.add('active-slide');
    allDots[currentSlideIndex].classList.add('dot-active');
  }

  function moveToNext() {
    displaySlide(currentSlideIndex + 1);
  }

  function moveToPrev() {
    displaySlide(currentSlideIndex - 1);
  }

  document.querySelector('.khotel-arrow-next').addEventListener('click', moveToNext);
  document.querySelector('.khotel-arrow-prev').addEventListener('click', moveToPrev);

  allDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const targetSlide = parseInt(e.target.getAttribute('data-slide'));
      displaySlide(targetSlide);
    });
  });

  setInterval(moveToNext, 5000);
})();


const track = document.getElementById('carousel');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');

const scrollAmount = 320; // scroll by width of one card

btnRight.addEventListener('click', () => {
  track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

btnLeft.addEventListener('click', () => {
  track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});


document.querySelectorAll('.location-slider').forEach(slider => {
    let currentIndex = 0;
    const slides = slider.querySelectorAll('.location-slide');

    setInterval(() => {
        slides[currentIndex].classList.remove('active-slide');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active-slide');
    }, 3000);
});

 window.addEventListener("load", function () {
    setTimeout(function () {
      document.getElementById("khOfferPopup").classList.add("show");
    }, 1200);
  });

  function closeKhPopup() {
    document.getElementById("khOfferPopup").classList.remove("show");
  }

  function copyKhCoupon() {
  const code = document.getElementById('couponCode').innerText;
  navigator.clipboard.writeText(code).then(function () {
    const msg = document.getElementById('khCopyMsg');
    msg.style.display = 'inline';
    setTimeout(function () {
      msg.style.display = 'none';
    }, 2000);
  });
}