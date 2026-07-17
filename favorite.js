// ===============================
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

            if (!savedFavorites.includes(title)) {
                savedFavorites.push(title);
            }

        } else {

            favorite.textContent = "❤️";

            savedFavorites = savedFavorites.filter(movie => movie !== title);

        }

        localStorage.setItem("favorites", JSON.stringify(savedFavorites));

    });

});