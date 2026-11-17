const carousel = document.querySelector(".carousel");

const petGrid = document.querySelector(".club-grid");

if (petGrid) {
    const adoptablePets = [
        ["Abigail", "61972939", "Mixed Breed, Large (over 44 lbs fully grown) / Mix", "4 months · Female", "https://g.petango.com/photos/337/3e0f0dcb-1f84-4558-adc9-45597f65eedf.jpg"],
        ["Azuki", "61498255", "Mixed Breed, Large (over 44 lbs fully grown) / Mix", "2 years, 3 months · Male", "https://g.petango.com/photos/337/a45324d5-0699-4706-90af-542b0adab748.jpg"],
        ["Babi", "61051602", "Domestic Shorthair / Mix", "7 years, 10 months · Male", "https://g.petango.com/photos/337/9d721877-61d8-4dda-bea3-1d1b5f6a8a9c.jpg"],
        ["Baby Girl", "61977903", "Chihuahua, Short Coat / Mix", "8 years · Female", "https://g.petango.com/photos/337/f1c9bbde-084d-4347-80b2-bb091a8b1634.jpg"],
        ["Bearberry", "62053008", "Shepherd / Mix", "3 months · Male", "https://g.petango.com/shared/Photo-Not-Available-dog.gif"],
        ["Bella", "60726640", "Terrier, Pit Bull / Mix", "9 years, 7 months · Female", "https://g.petango.com/photos/337/d57f3477-f46f-450f-bacc-8961be212849.jpg"],
        ["Benji", "61968001", "Chinese Shar-Pei / Mix", "2 years · Male", "https://g.petango.com/photos/337/2f82e92b-2a63-4c16-ae2a-019749329fbb.jpg"],
        ["Benny", "61416851", "Retriever, Labrador / Mix", "1 year, 2 months · Male", "https://g.petango.com/photos/337/534d4db8-e1dc-414e-8c44-984f9b3b640f.jpg"],
        ["Bonnie", "62061603", "Chinchilla / Chinchilla", "7 years · Female", "https://g.petango.com/shared/Photo-Not-Available-other.gif"],
        ["Boo", "59686166", "Domestic Shorthair / Mix", "3 years · Male", "https://g.petango.com/photos/337/0d2257b1-6644-4f9c-a4ac-58c656dd380c.jpg"],
        ["Bounty", "51754309", "Domestic Shorthair / Mix", "4 years · Male", "https://g.petango.com/photos/337/43402b33-ba8d-446c-bd63-413f93ba6f2c.jpg"],
        ["Brutus", "61972936", "Mixed Breed, Large (over 44 lbs fully grown) / Mix", "4 months · Male", "https://g.petango.com/photos/337/71854a7e-acb2-4129-97dd-2240a9957ba7.jpg"],
        ["Cash", "61968000", "Chinese Shar-Pei / Mix", "2 years · Male", "https://g.petango.com/photos/337/4e14b3bf-aeab-4b7b-abe8-682bc45fb366.jpg"],
        ["Casper", "61974489", "Terrier / Mix", "1 year · Male", "https://g.petango.com/photos/337/aee7a56e-86f6-4871-9e0f-836092dcfa00.jpg"],
        ["Cass", "61623732", "Mixed Breed, Large (over 44 lbs fully grown) / Mix", "4 years, 2 months · Male", "https://g.petango.com/photos/337/89a07fce-d5ac-45f9-abbe-687ce4a784ba.jpg"],
        ["Catara", "62081504", "Domestic Shorthair / Mix", "4 months · Female", "https://g.petango.com/shared/Photo-Not-Available-cat.gif"],
        ["Charlene", "62051479", "Boxer / Mix", "1 year · Female", "https://g.petango.com/photos/337/e945088a-2ddc-4099-9f4f-2b8eb3a67ec9.jpg"],
        ["Colby", "61027316", "Terrier, American Pit Bull / Mix", "10 years, 6 months · Male", "https://g.petango.com/photos/337/405e6387-ccc4-466b-91a1-848b9bee88ff.jpg"],
        ["Cremini", "61188875", "Domestic Shorthair / Mix", "2 years, 11 months · Female", "https://g.petango.com/photos/337/a8504a5e-591f-484c-a4be-7abf9b2530b0.jpg"],
        ["Cyrus", "61626890", "Mixed Breed, Large (over 44 lbs fully grown) / Mix", "2 years, 2 months · Male", "https://g.petango.com/photos/337/202ea23f-f354-4a7e-ab44-9e615ac0249b.jpg"],
        ["Darling", "61081614", "Domestic Shorthair / Mix", "14 years, 5 months · Female", "https://g.petango.com/photos/337/28ca5645-d95a-4e73-ab82-5bb126d0cbf8.jpg"],
        ["Edgar", "61731273", "Mixed Breed, Large (over 44 lbs fully grown) / Mix", "1 year, 3 months · Male", "https://g.petango.com/photos/337/8eba712f-49ee-4fa2-8eac-9431cd0dfd65.jpg"],
        ["Enrique", "61579294", "Australian Shepherd, Miniature / Mix", "5 years, 3 months · Male", "https://g.petango.com/photos/337/bea2ecec-b739-4ba9-bb12-59a2e3daecad.jpg"],
        ["Everest", "62041480", "Domestic Shorthair / Mix", "13 years · Male", "https://g.petango.com/photos/337/a03231b2-bb1c-4fe5-acb1-aa0ce2a09cd9.jpg"],
        ["Fairfax", "62050759", "Mixed Breed, Medium (up to 44 lbs fully grown) / Mix", "2 months · Male", "https://g.petango.com/photos/337/248d33ba-9435-4365-9c2e-0f29990f257f.jpg"],
        ["Freddie", "61896093", "Mixed Breed, Large (over 44 lbs fully grown) / Mix", "1 year, 7 months · Male", "https://g.petango.com/photos/337/82d295f9-0be4-4f92-a751-25b871550817.jpg"],
        ["Grover", "61579342", "Mixed Breed, Large (over 44 lbs fully grown) / Mix", "6 years, 9 months · Male", "https://g.petango.com/photos/337/6e2a13a9-7d5a-40cc-bbd0-a0b1f6645d35.jpg"],
        ["Gumdrop", "60731935", "Siberian Husky / Mix", "8 years, 7 months · Male", "https://g.petango.com/photos/337/5cc8cf35-38a2-4105-b3b9-c4610aa14f2f.jpg"],
        ["Hamilton", "60129173", "Mixed Breed, Large (over 44 lbs fully grown) / Mix", "1 year, 10 months · Male", "https://g.petango.com/photos/337/8b9ec6f9-77bb-4cd3-b31f-0d8eb5b2b2f0.jpg"],
        ["Jasmine", "61948752", "Domestic Shorthair / Mix", "10 years · Female", "https://g.petango.com/photos/337/fb894e9b-9ab1-41e6-a982-88339e2cfbc9.jpg"],
        ["Karma", "60909547", "Mixed Breed, Large (over 44 lbs fully grown) / Mix", "12 years · Female", "https://g.petango.com/photos/337/8f48ccd0-877b-4055-939a-b793b1136f8e.jpg"],
        ["Koda", "61370297", "German Shepherd / Mix", "8 years, 5 months · Female", "https://g.petango.com/photos/337/bad3f0a9-ad3b-498e-878e-77747fa8a068.jpg"],
        ["Kuno", "62034327", "German Shepherd / Mix", "5 years · Male", "https://g.petango.com/photos/337/850ab5f9-d795-4e5c-9b1b-5413a4f6bc4f.jpg"],
        ["Lavern", "61972931", "Mixed Breed, Medium (up to 44 lbs fully grown) / Mix", "4 months · Female", "https://g.petango.com/shared/Photo-Not-Available-dog.gif"],
        ["Legend", "60726875", "Mastiff / American Blue Heeler", "10 months · Male", "https://g.petango.com/shared/Photo-Not-Available-dog.gif"],
        ["Legs", "61793549", "Domestic Shorthair / Mix", "4 years, 1 month · Female", "https://g.petango.com/photos/337/59ccf2a2-292a-4c78-918d-b6c27a60e60c.jpg"],
        ["Lizy", "61184198", "Domestic Shorthair / Mix", "6 years, 5 months · Female", "https://g.petango.com/photos/337/3e179f5a-c824-4895-b850-ba9ee3627537.jpg"],
        ["Lucy Lawless", "62050738", "Domestic Shorthair / Mix", "7 months · Female", "https://g.petango.com/photos/337/2a2bc0bb-c0f7-4bd2-be55-706dff6827c0.jpg"],
        ["Magoo", "59295795", "Boxer / Mix", "7 years, 2 months · Male", "https://g.petango.com/photos/337/09074aa4-cf18-4c7d-84c3-73c85e50e636.jpg"],
        ["Maizey", "61994573", "Terrier, American Staffordshire / Mix", "5 years · Female", "https://g.petango.com/photos/337/b8efb511-5991-4e61-89bb-81133b07c6de.jpg"],
        ["Maud Pie", "61933198", "Mixed Breed, Large (over 44 lbs fully grown) / Mix", "3 months · Male", "https://g.petango.com/shared/Photo-Not-Available-dog.gif"],
        ["Meowington", "33827440", "Domestic Shorthair / Mix", "10 years, 2 months · Male", "https://g.petango.com/photos/337/74965fcd-286c-4b01-8df4-4cc441f00227.jpg"],
        ["Mia", "62051489", "Mixed Breed, Medium (up to 44 lbs fully grown) / Mix", "1 year · Female", "https://g.petango.com/photos/337/36e79efb-87a7-44ef-b5d9-6b39432e7744.jpg"],
        ["Midge", "41641282", "Domestic Shorthair / Mix", "13 years, 6 months · Female", "https://g.petango.com/photos/337/35b424fd-1373-4466-94ab-cac3a7f8b2ba.jpg"],
        ["Mikey", "56421696", "Domestic Shorthair / Mix", "2 years, 7 months · Male", "https://g.petango.com/photos/337/f1855efe-6403-468c-b908-e7f9b4b74cc4.jpg"],
        ["Misty", "61896101", "Terrier, Pit Bull / Mix", "2 years, 1 month · Female", "https://g.petango.com/photos/337/aec348d6-0545-4da3-94bb-6ca771b6b6f1.jpg"],
        ["Momo", "62061604", "Chinchilla / Chinchilla", "7 years · Female", "https://g.petango.com/shared/Photo-Not-Available-other.gif"],
        ["Moonie", "61574677", "Alaskan Husky / Mix", "8 years, 9 months · Female", "https://g.petango.com/photos/337/f7e17787-aeba-48f9-b38d-2406b9a0a43d.jpg"],
        ["Mumba", "56421695", "Domestic Shorthair / Mix", "2 years, 7 months · Male", "https://g.petango.com/photos/337/e6fc6a28-1092-441c-b687-55eb88250111.jpg"],
        ["Old Garlic", "61822366", "Maine Coon / Mix", "10 years, 1 month · Male", "https://g.petango.com/photos/337/759fd08a-ffa5-4619-b998-e4f5b9e345db.jpg"],
        ["Opie", "61972927", "Mixed Breed, Large (over 44 lbs fully grown) / Mix", "4 months · Male", "https://g.petango.com/shared/Photo-Not-Available-dog.gif"],
        ["Patricia", "60314436", "Domestic Shorthair / Mix", "7 years, 7 months · Female", "https://g.petango.com/photos/337/129634a9-5d09-4956-b7a4-86d8b7bdb5c3.jpg"],
        ["Pauly D", "61943751", "Domestic Shorthair / Mix", "12 years, 1 month · Male", "https://g.petango.com/photos/337/feb9c871-c4ef-4b1e-b18e-4283fdc1cb66.jpg"],
        ["Peppercorn", "61793921", "Domestic Shorthair / Mix", "1 year, 1 month · Female", "https://g.petango.com/shared/Photo-Not-Available-cat.gif"],
        ["Pistachio", "61524231", "Domestic Shorthair / Mix", "1 year · Male", "https://g.petango.com/photos/337/8d30309f-be17-48ef-8f43-7a74870b1c55.jpg"],
        ["Porsche", "60242374", "Terrier, Pit Bull / Mix", "5 years, 10 months · Female", "https://g.petango.com/photos/337/39ecfa43-f4a2-40b5-9600-3b65aeaf0529.jpg"],
        ["Puddin", "62051548", "Chinese Shar-Pei / Mix", "3 years · Female", "https://g.petango.com/photos/337/9e2eca2e-9668-473b-9ee4-30d3a5968748.jpg"],
        ["Renesme", "60799619", "Chihuahua, Short Coat / Mix", "10 years, 7 months · Female", "https://g.petango.com/photos/337/6f620ec1-4caa-4c2a-bc45-3688a9982db1.jpg"],
        ["Rocco", "61681641", "German Shepherd / English Shepherd", "2 years, 2 months · Male", "https://g.petango.com/photos/337/6ef10617-0c51-4391-a085-e06bf3b8c768.jpg"],
        ["Roscoe", "38757918", "Terrier, American Pit Bull / Mix", "8 years, 5 months · Male", "https://g.petango.com/photos/337/a77a4cf5-986e-4865-9dd3-e638836ca38c.jpg"],
        ["Rue", "62022976", "Domestic Medium Hair / Mix", "1 year · Male", "https://g.petango.com/photos/337/e006b2a0-230d-4204-b025-f1879552c899.jpg"],
        ["Ryan", "61974550", "Domestic Shorthair / Mix", "6 months · Male", "https://g.petango.com/photos/337/a2ad4c27-fece-461d-8878-4bf82b5472d8.jpg"],
        ["Saffron", "59244721", "Rex / American", "1 year, 6 months · Female", "https://g.petango.com/photos/337/9c9d97f9-e661-44ff-87ad-5b9ac89968de.jpg"],
        ["Savvy", "62087278", "Mixed Breed, Large (over 44 lbs fully grown) / Mix", "2 months · Female", "https://g.petango.com/shared/Photo-Not-Available-dog.gif"],
        ["Scooter", "61986579", "Poodle, Standard / Mix", "2 years · Male", "https://g.petango.com/photos/337/5234888c-5b70-41b3-9101-01d335999c40.jpg"],
        ["Sheba", "61556230", "Domestic Shorthair / Mix", "2 years, 3 months · Female", "https://g.petango.com/photos/337/f67a359b-f106-4d56-b6be-023aa083fc01.jpg"],
        ["Sierra", "59244724", "Rex / Rex", "1 year, 6 months · Female", "https://g.petango.com/photos/337/c2bd48f1-0324-4796-9d20-5a64b3327ed8.jpg"],
        ["Skyler", "61506688", "Domestic Shorthair / Mix", "1 year, 6 months · Male", "https://g.petango.com/photos/337/ffabecd8-806c-4533-8a3f-b2394ca27343.jpg"],
        ["Smoke", "60953893", "Terrier, Pit Bull / Mix", "5 years, 6 months · Male", "https://g.petango.com/photos/337/334eab41-6d71-4cf8-8fa0-4dd2f5622c3e.jpg"],
        ["Sokka", "62081503", "Domestic Shorthair / Mix", "4 months · Male", "https://g.petango.com/shared/Photo-Not-Available-cat.gif"],
        ["Solei", "61803772", "Mixed Breed, Large (over 44 lbs fully grown) / Mix", "1 year, 4 months · Female", "https://g.petango.com/photos/337/dcee289b-d0c0-463a-8223-8fea06aebeb8.jpg"],
        ["Sooki", "61564826", "Domestic Shorthair / Mix", "12 years, 3 months · Female", "https://g.petango.com/photos/337/fbd68e69-aa73-497b-8a29-5a0345fbb2c4.jpg"],
        ["Stella", "38606679", "Lacy / Mix", "9 years, 2 months · Female", "https://g.petango.com/photos/337/298d5b5a-de1a-4112-ae9e-83589f015af7.jpg"],
        ["Strut", "59317661", "Terrier / Mix", "2 years, 2 months · Male", "https://g.petango.com/photos/337/25430415-0988-470f-acfe-12f94b38ac28.jpg"],
        ["Sunny", "61652094", "Domestic Shorthair / Mix", "7 years, 6 months · Male", "https://g.petango.com/photos/337/10d08c62-9e25-4e42-96fc-4b872e527ca4.jpg"],
        ["Tabitha", "60880494", "Domestic Shorthair / Mix", "7 years, 6 months · Female", "https://g.petango.com/photos/337/c0a47cd5-d1ea-4196-aa91-2b2b8f7a861b.jpg"],
        ["Tana", "62087271", "Mixed Breed, Large (over 44 lbs fully grown) / Mix", "2 months · Female", "https://g.petango.com/shared/Photo-Not-Available-dog.gif"],
        ["Tassie", "61081611", "Domestic Shorthair / Mix", "14 years, 5 months · Female", "https://g.petango.com/photos/337/976e4033-08f8-4b20-a412-575ea9596115.jpg"],
        ["Tiburon", "61707283", "Domestic Shorthair / Mix", "7 months · Male", "https://g.petango.com/photos/337/dfe301b2-588a-4780-8bc2-31f61cbda4f3.jpg"],
        ["Toby", "59574624", "Mixed Breed, Large (over 44 lbs fully grown) / Mix", "4 years, 8 months · Male", "https://g.petango.com/photos/337/3f4e7c85-ab18-4994-9893-3841044e9d10.jpg"],
        ["Toffee", "61337008", "Mixed Breed, Large (over 44 lbs fully grown) / German Shepherd", "5 years, 10 months · Male", "https://g.petango.com/photos/337/6d26e732-ef4d-4c8f-8a46-f03b1758fa4b.jpg"],
        ["Toni", "61656587", "German Shepherd / Mix", "4 years, 6 months · Male", "https://g.petango.com/photos/337/bda386c1-4fcd-4864-b668-5e5ea5e95ed6.jpg"],
        ["Walter", "61870295", "Terrier, Pit Bull / Mix", "9 years, 1 month · Male", "https://g.petango.com/photos/337/568d6939-2446-4aff-bcf7-9ccc3416abc4.jpg"],
        ["Wendy", "20968000", "Domestic Shorthair / Mix", "13 years, 3 months · Female", "https://g.petango.com/photos/337/ae8c68f6-a7af-45a8-8757-76847774e0a3.jpg"],
        ["Xena", "62051484", "Terrier, Pit Bull / Mix", "1 year · Female", "https://g.petango.com/photos/337/f79c9b93-db14-48f5-9fd5-4de647fa3622.jpg"],
        ["Zelda", "61687215", "Domestic Longhair / Mix", "11 years, 2 months · Female", "https://g.petango.com/photos/337/31e434c1-4646-44f2-ab2b-1a25a901f6b6.jpg"],
        ["Zuko", "61868346", "Mixed Breed, Large (over 44 lbs fully grown) / Mix", "2 years, 1 month · Male", "https://g.petango.com/photos/337/446e55a3-421d-44e7-b3c7-ecb488845daa.jpg"]
    ];

    adoptablePets.sort((firstPet, secondPet) => firstPet[0].localeCompare(secondPet[0]));
    petGrid.replaceChildren();

    adoptablePets.forEach(([name, id, breed, ageAndSex, image]) => {
        const card = document.createElement("a");
        card.className = "club-card";
        card.href = `https://www.seattlehumane.org/pet-detail?pet=${id}`;

        const title = document.createElement("h3");
        title.className = "club-card__title";
        title.textContent = name;

        const photo = document.createElement("img");
        photo.className = "club-card__img";
        photo.src = image;
        photo.alt = name;

        const footer = document.createElement("div");
        footer.className = "club-card__footer";

        const description = document.createElement("span");
        description.textContent = breed;

        const details = document.createElement("span");
        details.textContent = ageAndSex;

        footer.append(description, details);
        card.append(title, photo, footer);
        petGrid.appendChild(card);
    });
}

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