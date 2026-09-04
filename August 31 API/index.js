

function fetchProducts() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            const productGrid = document.getElementById('productGrid');
            productGrid.innerHTML = ''; // Clear existing products
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h3>${product.category}</h3>
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <h2>$${product.price.toFixed(2)}</h2>
                `;
                productGrid.appendChild(productCard);
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
}

fetchProducts();