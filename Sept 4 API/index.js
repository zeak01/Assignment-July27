
const url = 'https://spotify81.p.rapidapi.com/partner/search-concert-artists?query=The%20Fratellis';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'f0cd09f4dfmshbab1a554074c88fp1cec6bjsnad7008e30a59',
        'x-rapidapi-host': 'spotify81.p.rapidapi.com',
        'Content-Type': 'application/json'
    }
};
const artistContainer = document.getElementById('artist-container');
artistContainer.innerHTML = " ";

async function fetchData() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();

        const artist = result.data;
        const theArtists = artist.artist;
        console.log(theArtists);
            const artistElement = document.createElement('div');
            artistElement.classList.add('artist');
            artistElement.innerHTML = `
            <img src="${theArtists.image}" alt="${theArtists.name}">
                <h2>${theArtists.name}</h2>
            `;
            artistContainer.appendChild(artistElement);
 
    }
    catch (error) {
        console.error(error);
    }

}

fetchData();