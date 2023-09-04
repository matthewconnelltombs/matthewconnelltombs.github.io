const carousel = document.querySelector(".carousel");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
let currentIndex = 0;
let prevIndex;
const images = document.querySelectorAll(".carousel-icon-container");

const totalImages = Object.keys(images).length;

function calculateCardWidth() {
    let imagesDisplayed;

    if (window.innerWidth <= 750) {
        imagesDisplayed = 1;
    } else if (window.innerWidth <= 1440) {
        imagesDisplayed = 2;
    } else {
        imagesDisplayed = 3;
    }
    const carouselContainer = document.querySelector(".carousel-container");
    const containerWidth = carouselContainer.offsetWidth;

    // Calculate the width of each card
    return (containerWidth - 20 * (imagesDisplayed - 1)) / imagesDisplayed;
}

let imageWidth = getElementWidth();

function getElementWidth() {
    let card_width = calculateCardWidth()
    return card_width + 20;
}

function handleResize() {
    imageWidth = getElementWidth();
}

window.addEventListener('resize', handleResize);

let animationInProgress = false;

function handleArrowClick(direction) {
    if (animationInProgress) {
        return;
    }
    console.log(calculateCardWidth())
    animationInProgress = true;

    if (direction === "left") {

        prevIndex = currentIndex;
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        carousel.style.transform = `translateX(-${imageWidth}px)`;
        carousel.insertBefore(images[currentIndex].parentNode, carousel.firstChild);

        setTimeout(() => {
            carousel.style.transform = "";
            carousel.classList.add("sliding-transition");
        }, 10);

        setTimeout(() => {
            carousel.classList.remove("sliding-transition");
            animationInProgress = false;
        }, 500);

    } else if (direction === "right") {
        carousel.classList.add("sliding-transition");

        prevIndex = currentIndex;
        currentIndex = (currentIndex + 1) % totalImages;

        carousel.style.transform = `translateX(-${imageWidth}px)`;

        setTimeout(() => {
            carousel.appendChild(images[prevIndex].parentNode);
            carousel.classList.remove("sliding-transition");
            carousel.style.transform = "";
            animationInProgress = false;
        }, 500);
    }
}

leftArrow.addEventListener("click", () => {
    handleArrowClick("left");
});

rightArrow.addEventListener("click", () => {
    handleArrowClick("right");
});
