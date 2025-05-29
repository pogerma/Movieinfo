const searchButton = document.querySelector(".searchBtn");
const searchform = document.querySelector("form")
const movieContainer = document.querySelector(".movie-container")


const getMovieInfo = async (Kinoner) => {
    const MyApikey = "f354af57";
    const url = `https://www.omdbapi.com/?apikey=${MyApikey}&t=${Kinoner}`;
    const response = await fetch(url);
    const data = await response.json()
   
    showMovieData(data);
 console.log(data)
}
const showMovieData = (data) => {
    movieContainer.innerHTML = ""
    const { Title, imdbRating, Genre, Released, Runtime, Actors, Plot, Poster} =data;

    const MovieElement = document.createElement('div')
    MovieElement.innerHTML = `<h1>${Title}</h1> <p>${Runtime}<p/>`
    movieContainer.appendChild(MovieElement)

    const moviePosterElement = document.createElement('div')
    moviePosterElement.classList.add('movie-poster')
    moviePosterElement.innerHTML = `<img src = "${Poster}"/>`
    movieContainer.appendChild(moviePosterElement)
}

searchform.addEventListener('submit', (e) =>{
    e.preventDefault()
    const movieName = inputBox.value.trim()
    if(movieName !==''){
        getMovieInfo(movieName)
    }
})





// console.log(searchButton);



