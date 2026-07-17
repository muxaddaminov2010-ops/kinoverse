const modal = document.getElementById("movie-modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalRating = document.getElementById("modal-rating");
const modalDescription = document.getElementById("modal-description");

const trailerFrame = document.getElementById("modal-trailer");
const trailerBtn = document.getElementById("trailer-btn");

const closeBtn = document.querySelector(".close");

function openMovie(id){

    const movie = movies.find(m => m.id === id);

    if(!movie) return;

    modalImage.src = movie.image;
    modalTitle.textContent = movie.title;
    modalRating.textContent = movie.rating;
    modalDescription.textContent = movie.description;

    trailerFrame.style.display = "none";
    trailerFrame.src = "";

    trailerBtn.onclick = () => {

        trailerFrame.style.display = "block";
        trailerFrame.src = movie.trailer;

    };

    modal.style.display = "flex";

}

closeBtn.onclick = () => {

    modal.style.display = "none";
    trailerFrame.src = "";

};

window.onclick = (e)=>{

    if(e.target===modal){

        modal.style.display="none";
        trailerFrame.src="";

    }

};

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        modal.style.display="none";
        trailerFrame.src="";

    }

});