const searchBar = document.getElementById("searchBar");
const movieList = document.getElementById("movieList");

// Function to filter movies based on the search input
searchBar.addEventListener("keyup", () => {
    const searchTerm = searchBar.value.toLowerCase();
    const movies = movieList.getElementsByClassName("movie");

    for (let i = 0; i < movies.length; i++) {
        const movieTitle = movies[i].innerText.toLowerCase();
        movies[i].style.display = movieTitle.includes(searchTerm) ? "inline-block" : "none";
    }
});

