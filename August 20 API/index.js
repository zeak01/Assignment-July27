const top_movies_container = document.getElementById("top_movies_container");
top_movies_container.innerHTML = ""; // Clear the container before adding new content

async function fetchTopMovies() {
    const url = 'https://imdb236.p.rapidapi.com/api/imdb/top250-movies';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'f0cd09f4dfmshbab1a554074c88fp1cec6bjsnad7008e30a59',
            'x-rapidapi-host': 'imdb236.p.rapidapi.com',
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
        result.forEach(movie => {
            const movie_card = document.createElement("div");
            movie_card.classList.add("video-card");
            movie_card.innerHTML = `
                <img src="${movie.primaryImage}" alt="Movie Poster">
                <h3>${movie.originalTitle}</h3>
                <p>Rating: ${movie.contentRating}</p>
            `;
            //  top_movies_container.innerHTML= ""
            top_movies_container.appendChild(movie_card);
        });
        // Add your code here to display movies in top_movies_container
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}


// Call the function
fetchTopMovies();


