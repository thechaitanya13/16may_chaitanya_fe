let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const slideCount = slides.length;
// ----------------------------next-previous button----------------
function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

// ---------------------------zoom- focused slide----------------------
function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slideCount) % slideCount;
    slides[currentSlide].classList.add('active');

    // ----------------------rotation slider------------
    const offset = -((currentSlide - 2) * (33));
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;

    // ---------------------bluer other slide------------------
    for (let i = 0; i < slides.length; i++) {
        if (i !== currentSlide) {
            slides[i].style.filter = 'blur(2px)';
        } else {
            slides[i].style.filter = 'none';
        }
    }
}
// ---------------------------rotation slide---------------------
setInterval(nextSlide, 4000);