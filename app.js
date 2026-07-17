const movieGrid = document.getElementById("movie-grid");

function renderMovies() {

    movieGrid.innerHTML = "";

    movies.forEach(movie => {

        movieGrid.innerHTML += `
            <div class="movie-card">

                <img src="${movie.image}" alt="${movie.title}">

                <div class="favorite">❤️</div>

                <div class="movie-info">

                    <h3>${movie.title}</h3>

                    <p>${movie.rating}</p>

                    <button class="watch-btn"
                        onclick="location.href='watch.html?id=${movie.id}'">
                        ▶ Tomosha qilish
                    </button>

                </div>

            </div>
        `;

    });

}

renderMovies();