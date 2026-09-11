const url = 'https://imdb236.p.rapidapi.com/api/imdb/top250-movies';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '46538a5a68mshe0003a9f723f86ep1a3eb3jsn1570f09275eb',
		'x-rapidapi-host': 'imdb236.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

const movieContainer= document.getElementById("movieContainer");
movieContainer.innerHTML="";


async function FetchData() {
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);
		result.forEach((movie) => {  // Data is an array of objects, so we can use forEach to iterate through each movie object ( Items we want to display)
			const movieElement = document.createElement('div');
			movieElement.classList.add('movie');
			movieElement.innerHTML = `
				<img src="${movie.primaryImage}" alt="${movie.originalTitle}">
				<h2>${movie.originalTitle}</h2>
				<p> ${movie.description}</p>
				<p>Type: ${movie.type}</p>
				<p>Release Date: ${movie.releaseDate}</p>
				<p>Rating: ${movie.averageRating}</p>
				<p>Run Time: ${movie.runtimeMinutes}</p>
				<a href="${movie.url}" target="_blank">Click to watch now</a>
			`;
			movieContainer.appendChild(movieElement);
		});
	}
     catch (error) {
		console.error(error);
	}
}
FetchData();