const cardsContainer = document.querySelector('.cards');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.querySelector('.progress-bar');

const slides=document.querySelectorAll('.carousel-item');

const cardWidth = 400 + 20; // Card width + gap
const totalCards = document.querySelectorAll('.card').length;
const cardsPerPage = 3;
const totalSlides = Math.ceil(totalCards / cardsPerPage);
let currentSlide = 0;
let currentIndex=0;

function updateCarousel() {
    // Move the cards container
    cardsContainer.style.transform = `translateX(-${currentSlide * cardWidth * cardsPerPage}px)`;

    // Update progress bar
    let progressWidth = ((currentSlide + 1) / totalSlides) * 100;
    progressBar.style.width = `${progressWidth}%`;

    // Enable/Disable buttons accordingly
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide >= totalSlides - 1;
}

// Next Button Click
nextBtn.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateCarousel();
    }
});

// Previous Button Click
prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateCarousel();
    }
});


function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Initial Update
updateCarousel();

// Auto-slide every 5 seconds (optional)
//setInterval(nextSlide, 50000);

