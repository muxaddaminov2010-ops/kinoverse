const hero = document.getElementById("hero");
const heroTitle = document.getElementById("hero-title");
const heroDescription = document.getElementById("hero-description");
const heroWatch = document.getElementById("hero-watch");

const prevBtn = document.getElementById("prev-slide");
const nextBtn = document.getElementById("next-slide");
const dots = document.querySelectorAll(".dot");

let current = 0;

// Hero uchun birinchi 4 ta kino
const heroMovies = movies.slice(0, 4);

function updateHero() {

    const movie = heroMovies[current];

    hero.style.backgroundImage =
        `linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)), url(${movie.hero})`;

    hero.style.backgroundSize = "cover";
    hero.style.backgroundPosition = "center";

    heroTitle.textContent = movie.title;
    heroDescription.textContent = movie.description;

    heroWatch.onclick = () => {
        location.href = `watch.html?id=${movie.id}`;
    };

    dots.forEach(dot => dot.classList.remove("active"));
    dots[current].classList.add("active");
}

// Boshlang'ich holat
updateHero();

// Keyingi
nextBtn.onclick = () => {
    current++;
    if (current >= heroMovies.length) current = 0;
    updateHero();
};

// Oldingi
prevBtn.onclick = () => {
    current--;
    if (current < 0) current = heroMovies.length - 1;
    updateHero();
};

// Nuqtalar
dots.forEach((dot, index) => {
    dot.onclick = () => {
        current = index;
        updateHero();
    };
});

// Avtomatik almashish
setInterval(() => {
    current++;
    if (current >= heroMovies.length) current = 0;
    updateHero();
}, 5000);