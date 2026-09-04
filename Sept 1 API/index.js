
const url = 'https://mobile-phone-specs-database.p.rapidapi.com/gsm/get-phone-images-links-by-phone-custom-id/103693';
const phoneContainer = document.getElementById('phoneGrid');
phoneContainer.innerHTML = ''; // Clear the container before adding new content
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f0cd09f4dfmshbab1a554074c88fp1cec6bjsnad7008e30a59',
		'x-rapidapi-host': 'mobile-phone-specs-database.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

async function fetchData() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        result.forEach(item => {
            const phoneCard = document.createElement('div');
            phoneCard.classList.add('phone-card');
            phoneCard.innerHTML = ` 
          <img src="${item.link}" alt="${item.imageName}">
          <h2>${item.imageName}</h2>
         `;
            phoneContainer.appendChild(phoneCard);
        });
    } catch (error) {
        console.error(error);
    }
}

fetchData();