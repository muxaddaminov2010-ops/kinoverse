// =============================== console.log(typeof movies);
// ❤️ FAVORITE
// ===============================

const favorites = document.querySelectorAll(".favorite");

let savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

favorites.forEach((favorite) => {

    const card = favorite.closest(".movie-card");
    const title = card.querySelector("h3").textContent;

    if (savedFavorites.includes(title)) {
        favorite.textContent = "🤍";
    }

    favorite.addEventListener("click", () => {

        if (favorite.textContent === "❤️") {

            favorite.textContent = "🤍";
            savedFavorites.push(title);

        } else {

            favorite.textContent = "❤️";
            savedFavorites = savedFavorites.filter(movie => movie !== title);

        }

        localStorage.setItem("favorites", JSON.stringify(savedFavorites));

    });

});// ===============================
// 🔍 SEARCH
// ===============================

const search = document.getElementById("search");
const searchResults = document.getElementById("search-results");

var movies = [
    {
        title: "Avengers",
        rating: "⭐ 8.9 / 10",
        image: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg"
    },
    {
        title: "Batman",
        rating: "⭐ 8.5 / 10",
        image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },
    {
        title: "Spider-Man",
        rating: "⭐ 8.7 / 10",
        image: "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg"
    },
    {
        title: "Interstellar",
        rating: "⭐ 9.2 / 10",
        image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    }
];

search.addEventListener("input", () => {

    const value = search.value.toLowerCase();

    searchResults.innerHTML = "";

    if (value === "") {
        searchResults.style.display = "none";
        return;
    }

    const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(value)
    );

    if (filtered.length === 0) {
        searchResults.style.display = "none";
        return;
    }

    searchResults.style.display = "block";

    filtered.forEach(movie => {

searchResults.innerHTML += `
<div class="search-card" onclick="openMovie(${movie.id})">

    <img src="${movie.image}" alt="${movie.title}">

    <div class="search-info">
        <h4>${movie.title}</h4>
        <p>${movie.rating}</p>
    </div>

</div>
`;

    });

}); // ===============================
// 🎬 MODAL
// ===============================

const modal = document.getElementById("movie-modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalRating = document.getElementById("modal-rating");
const modalDescription = document.getElementById("modal-description");

const closeBtn = document.querySelector(".close");
const watchButtons = document.querySelectorAll(".watch-btn");

const movieDetails = {

    "Avengers": {
        image: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
        rating: "⭐ 8.9 / 10",
        description: "Qasoskorlar Thanosga qarshi so'nggi jangga tayyor."
    },

    "Batman": {
        image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        rating: "⭐ 8.5 / 10",
        description: "Batman Gotham shahrini jinoyatchilardan himoya qiladi."
    },

    "Spider-Man": {
        image: "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg",
        rating: "⭐ 8.7 / 10",
        description: "Peter Parker yangi sarguzashtlarga duch keladi."
    },

    "Interstellar": {
        image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        rating: "⭐ 9.2 / 10",
        description: "Insoniyatni qutqarish uchun buyuk kosmik sayohat."
    }

};

watchButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".movie-card");
        const title = card.querySelector("h3").textContent;

        const movie = movieDetails[title];

        modalImage.src = movie.image;
        modalTitle.textContent = title;
        modalRating.textContent = movie.rating;
        modalDescription.textContent = movie.description;

        modal.style.display = "flex";

    });

});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.style.display = "none";
    }
}); // ===============================
// 🎞 HERO SLIDER
// ===============================

const hero = document.getElementById("hero");
const heroTitle = document.getElementById("hero-title");
const heroDescription = document.getElementById("hero-description");

const prevBtn = document.getElementById("prev-slide");
const nextBtn = document.getElementById("next-slide");
const dots = document.querySelectorAll(".dot");

const heroMovies = [

    {
        title: "Avengers: Endgame",
        description: "Qasoskorlar Thanosga qarshi so'nggi jangga tayyor.",
        image: "https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
    },

    {
        title: "The Batman",
        description: "Batman Gotham shahrini jinoyatchilardan himoya qiladi.",
        image: "https://image.tmdb.org/t/p/original/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg"
    },

    {
        title: "Spider-Man",
        description: "Peter Parker yangi sarguzashtlarga duch keladi.",
        image: "https://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg"
    },

    {
        title: "Interstellar",
        description: "Insoniyatni qutqarish uchun buyuk kosmik sayohat.",
        image: "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
    }

];

let current = 0;

function updateHero() {

let overlay = document.body.classList.contains("light-mode")
    ? "rgba(246, 242, 242, 0.35)"
    : "rgba(0,0,0,.65)";

hero.style.background = `
linear-gradient(${overlay}, ${overlay}),
url(${heroMovies[current].image})
`;

    hero.style.backgroundSize = "cover";
    hero.style.backgroundPosition = "center";

    heroTitle.textContent = heroMovies[current].title;
    heroDescription.textContent = heroMovies[current].description;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[current].classList.add("active");
}

updateHero();

nextBtn.addEventListener("click", () => {

    current++;

    if (current >= heroMovies.length) {
        current = 0;
    }

    updateHero();

});

prevBtn.addEventListener("click", () => {

    current--;

    if (current < 0) {
        current = heroMovies.length - 1;
    }

    updateHero();

});

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        current = index;
        updateHero();

    });

});

setInterval(() => {

    current++;

    if (current >= heroMovies.length) {
        current = 0;
    }

    updateHero();

}, 5000);
console.log(movies);
const btn = document.getElementById("theme-Btn");
const themeBtn = document.getElementById("theme-btn");

themeBtn.onclick = function () {
    document.body.classList.toggle("light-mode");

    console.log("Light mode:", document.body.classList.contains("light-mode"));
};