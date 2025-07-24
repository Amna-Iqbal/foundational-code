

const searchBtn = document.getElementById("searchbtn");
const searchBar = document.getElementById("search")
const addBtn = document.getElementsByClassName("addbtn");
const moviesContainer = document.getElementById("movies");

let savedMovies = JSON.parse(localStorage.getItem("savedMovies")) || []; 
searchBar.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    searchMovies(this.value);
  }
});

searchBtn.addEventListener("click", function(){
    let searchInput = searchBar.value
    searchMovies(searchInput);
    searchBar.value = "";
})

let searchMovies = (searchInput) => {
  fetch(`https://www.omdbapi.com/?apikey=a41de663&s=${searchInput}`)
    .then((response) => 
      response.json())
    .then((data) => {
      if(data.Response==="True"){
      const moviesFound = data.Search;
      moviesContainer.innerHTML = "";
      moviesFound.forEach((movie) => {
        renderMovieById(movie.imdbID);    
    })
   
  } else {
    moviesContainer.innerHTML = `
    <p class="cta">Unable to find what you’re looking for. Please try another search.</p>`
  }
    })
    .catch(err => {
      moviesContainer.innerHTML = `
      <i class="fa-solid fa-exclamation-triangle"></i>
      <p class="cta">Something went wrong</p>
      `
  })
};

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("addbtn") || e.target.closest(".addbtn")) {
    const button = e.target.closest(".addbtn");
    const movieId = button.getAttribute("data-imdb");

    if (!savedMovies.includes(movieId)) {
      savedMovies.push(movieId);
      alert("movie added to watchlist!");
      localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
    }
  }
});


function renderMovieById(movieId) {
  fetch(`https://www.omdbapi.com/?apikey=a41de663&i=${movieId}`)
    .then((response) => response.json())
    .then((data) => {
      moviesContainer.classList.add("showresult");
      moviesContainer.innerHTML += `
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
                    <button class="addbtn btn" data-imdb=${data.imdbID}><i class="fa-solid fa-circle-plus"></i>Watchlist</button>
                </div>
                 <p>${data.Plot}</p>
            </div>
        <div>
        `;
    });
}
