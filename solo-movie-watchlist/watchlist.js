const watchlistContainer = document.getElementById("watchlist");
let savedMovies = JSON.parse(localStorage.getItem("savedMovies"))
const removeBtn = document.getElementsByClassName("removebtn");

function rendermovies(moviesArray){
    if (moviesArray.length > 0) {
        moviesArray.forEach((movie)=>renderMovieById(movie))
        } else {
          watchlistContainer.innerHTML = `
          <p class="cta">Your watchlist is looking a little empty..</p>
          <div class="addcontainer">
          <i class="fa-solid fa-circle-plus"></i>
          <span>
          <a href="index.html" class="linkadd">Lets add some movies!</a>
          </span>
          </div>
          `;
          watchlistContainer.classList.remove("showresult");
        }
   
}
document.addEventListener("DOMContentLoaded", function() {
    rendermovies(savedMovies);
});


function renderMovieById(movieId) {
    fetch(`https://www.omdbapi.com/?apikey=a41de663&i=${movieId}`)
      .then((response) => response.json())
      .then((data) => {
        watchlistContainer.classList.add("showresult");
        watchlistContainer.innerHTML += `
          <div class="movie-data">
              <img src = ${data.Poster} />
              <div class="movie-info">
                  <div class="row1 row">
                      <h2>${data.Title}</h2>
                      <i class="fa-solid fa-star" style="font-size:15px"></i>
                      <span>${data.imdbRating}</span>
                  </div>
                  <div class="row2 row">
                      <p>${data.Runtime}</p>
                      <p>${data.Genre}</p>
                      <button class="removebtn btn" data-imdb=${data.imdbID}>
                      <i class="fa-solid fa-circle-minus"></i>Remove
                      </button>
                  </div>
                   <p>${data.Plot}</p>
              </div>
          <div>
          `;
      });

  }


  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("removebtn") || e.target.closest(".removebtn")) {
        const button = e.target.closest(".removebtn");
        const movieId = button.getAttribute("data-imdb");
  
        if (savedMovies.includes(movieId)) {
            savedMovies = savedMovies.filter((id) => id !== movieId);
            alert("Movie removed from watchlist!");
            localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
            watchlistContainer.innerHTML = "";
            rendermovies(savedMovies);
        }
    }
});
