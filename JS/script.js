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

    const petFilters = document.querySelector(".pet-filters");

    if (petFilters) {
        const petCards = Array.from(document.querySelectorAll(".pet-card"));
        const searchInput = petFilters.querySelector('input[name="pet-search"]');
        const speciesSelect = petFilters.querySelector('select[name="species"]');
        const ageSelect = petFilters.querySelector('select[name="age"]');
        const resultsMessage = document.querySelector(".pet-results");
        const emptyMessage = document.querySelector(".pet-empty");

        function filterPets() {
            const searchTerm = searchInput.value.trim().toLowerCase();
            let visibleCount = 0;

            petCards.forEach((card) => {
                const matchesName = card.dataset.name.includes(searchTerm);
                const matchesSpecies = speciesSelect.value === "all" || card.dataset.species === speciesSelect.value;
                const matchesAge = ageSelect.value === "all" || card.dataset.age === ageSelect.value;
                const isVisible = matchesName && matchesSpecies && matchesAge;

                card.hidden = !isVisible;
                visibleCount += Number(isVisible);
            });

            resultsMessage.textContent = `Showing ${visibleCount} ${visibleCount === 1 ? "pet" : "pets"}`;
            emptyMessage.hidden = visibleCount > 0;
        }

        petFilters.addEventListener("input", filterPets);
        petFilters.addEventListener("change", filterPets);
        petFilters.addEventListener("submit", (event) => event.preventDefault());
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