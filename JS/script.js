const carousel = document.querySelector(".carousel");

if (carousel) {
    const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
    const indicators = Array.from(carousel.querySelectorAll(".carousel-indicators button"));
    let activeIndex = 0;

    function showSlide(index) {
        activeIndex = (index + slides.length) % slides.length;

        slides.forEach((slide, slideIndex) => {
            const isActive = slideIndex === activeIndex;
            slide.hidden = !isActive;
            slide.setAttribute("aria-hidden", String(!isActive));
            indicators[slideIndex].setAttribute("aria-current", String(isActive));
        });
    }

    carousel.querySelector(".carousel-previous").addEventListener("click", () => {
        showSlide(activeIndex - 1);
    });

    carousel.querySelector(".carousel-next").addEventListener("click", () => {
        showSlide(activeIndex + 1);
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => showSlide(index));
    });
}