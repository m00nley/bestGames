document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       BURGER MENU
    ========================= */

    const burger = document.querySelector(".burger");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (burger && mobileMenu) {
        burger.addEventListener("click", () => {
            burger.classList.toggle("burger--active");
            mobileMenu.classList.toggle("mobile-menu--active");
        });

        mobileMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                burger.classList.remove("burger--active");
                mobileMenu.classList.remove("mobile-menu--active");
            });
        });
    }


    /* =========================
       HERO SLIDER
    ========================= */

    const slides = document.querySelectorAll(".hero__slide");
    const dots = document.querySelectorAll(".hero__dot");

    if (slides.length > 0 && dots.length > 0) {
        let currentSlide = 0;
        let sliderTimer;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle("hero__slide--active", i === index);
            });

            dots.forEach((dot, i) => {
                dot.classList.toggle("hero__dot--active", i === index);
            });

            currentSlide = index;
        }

        function nextSlide() {
            const nextIndex = (currentSlide + 1) % slides.length;
            showSlide(nextIndex);
        }

        function startSlider() {
            sliderTimer = setInterval(nextSlide, 5000);
        }

        function resetSlider() {
            clearInterval(sliderTimer);
            startSlider();
        }

        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                showSlide(index);
                resetSlider();
            });
        });

        showSlide(0);
        startSlider();
    }


    /* =========================
       CATALOG MOBILE FILTER
    ========================= */

    const filterButton = document.querySelector(".catalog__filter-button");
    const filter = document.querySelector(".catalog-filter");

    if (filterButton && filter) {
        filterButton.addEventListener("click", () => {
            filter.classList.toggle("catalog-filter--active");

            if (filter.classList.contains("catalog-filter--active")) {
                filterButton.textContent = "Скрыть фильтр";
            } else {
                filterButton.textContent = "Открыть фильтр";
            }
        });
    }


    /* =========================
       SEARCH
    ========================= */

    const searchForm = document.querySelector(".search-box");
    const searchInput = document.querySelector(".search-box input");

    if (searchForm && searchInput) {
        searchForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const value = searchInput.value.trim();

            if (value !== "") {
                window.location.href =
                    `catalog.html?search=${encodeURIComponent(value)}`;
            }
        });
    }


    /* =========================
       CLOSE MOBILE MENU
       WHEN CLICKING OUTSIDE
    ========================= */

    document.addEventListener("click", (event) => {
        if (!burger || !mobileMenu) {
            return;
        }

        const clickedInsideMenu =
            mobileMenu.contains(event.target);

        const clickedBurger =
            burger.contains(event.target);

        if (
            !clickedInsideMenu &&
            !clickedBurger &&
            mobileMenu.classList.contains("mobile-menu--active")
        ) {
            burger.classList.remove("burger--active");
            mobileMenu.classList.remove("mobile-menu--active");
        }
    });

});