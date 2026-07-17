// URL dan id olish 
const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

// Kinoni topish
const movie = movies.find(m => m.id === id);

if (!movie) {
    document.body.innerHTML = "<h1 style='text-align:center;color:white'>Kino topilmadi</h1>";
} else {

    // Hero foni
    document.getElementById("hero").style.backgroundImage =
        `linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.8)), url(${movie.hero})`;

    // Ma'lumotlar
    document.getElementById("movie-image").src = movie.image;
    document.getElementById("movie-title").textContent = movie.title;
    document.getElementById("movie-rating").textContent = movie.rating;
    document.getElementById("movie-year").textContent = movie.year;
    document.getElementById("movie-genre").textContent = movie.genre;
    document.getElementById("movie-duration").textContent = movie.duration;
    document.getElementById("movie-description").textContent = movie.description;

    // Treyler
    const trailerBtn = document.getElementById("trailer-btn");
    const trailerSection = document.getElementById("trailer-section");
    const trailer = document.getElementById("movie-trailer");

    trailerBtn.onclick = () => {

        trailerSection.style.display = "block";

        trailer.src = movie.trailer;

        trailerSection.scrollIntoView({
            behavior: "smooth"
        });

    };

    // O'xshash filmlar
    const related = document.getElementById("related-movies");

    movies
        .filter(item => item.id !== movie.id)
        .forEach(item => {

            related.innerHTML += `
                <div class="movie-card">

                    <img src="${item.image}" alt="${item.title}">

                    <div class="movie-info">

                        <h3>${item.title}</h3>

                        <p>${item.rating}</p>

                        <button class="watch-btn"
                        onclick="location.href='watch.html?id=${item.id}'">
                            ▶ Tomosha qilish
                        </button>

                    </div>

                </div>
            `;

        });

}