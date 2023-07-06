let currentIndex = 0;
let carouselCards = document.querySelectorAll('.carousel-card');

function showPhoto(index) {
  for (let i = 0; i < carouselCards.length; i++) {
    if (i === index) {
      carouselCards[i].style.display = 'block';
    } else {
      carouselCards[i].style.display = 'none';
    }
  }
}

function nextPhoto() {
  currentIndex = (currentIndex + 1) % carouselCards.length;
  showPhoto(currentIndex);
}

function prevPhoto() {
  currentIndex = (currentIndex - 1 + carouselCards.length) % carouselCards.length;
  showPhoto(currentIndex);
}

// Show the initial photo
showPhoto(currentIndex);