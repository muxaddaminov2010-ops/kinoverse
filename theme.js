const themeBtn = document.getElementById("theme-btn");

themeBtn.onclick = function () {

    document.body.classList.toggle("light-mode");

    // Hero rangini yangilash
    if (typeof updateHero === "function") {
        updateHero();
    }

    console.log(
        "Light mode:",
        document.body.classList.contains("light-mode")
    );
};