// ===============================
// 🔍 SEARCH
// ===============================

const search = document.getElementById("search");
const searchResults = document.getElementById("search-results");

search.addEventListener("input", () => {

    const value = search.value.toLowerCase().trim();

    searchResults.innerHTML = "";

    if (value === "") {
        searchResults.style.display = "none";
        return;
    }

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(value)
    );

    if (filteredMovies.length === 0) {
        searchResults.style.display = "none";
        return;
    }

searchResults.innerHTML += `
<div class="search-card" onclick="openMovie(${movie.id})">

    <img src="${movie.image}" alt="${movie.title}">

    <div class="search-card-info">

        <h4>${movie.title}</h4>

        <p>${movie.rating}</p>

    </div>

</div>
`;

});

// Input tashqarisini bossa yopiladi
document.addEventListener("click", (e) => {

    if (
        !search.contains(e.target) &&
        !searchResults.contains(e.target)
    ) {
        searchResults.style.display = "none";
    }

});