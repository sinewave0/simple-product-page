const products = [
    {
        name: "Product 1",
        description: "A simple description for the first product.",
        price: "₹999",
        image: "images/image1.jpg"
    },
    {
        name: "Product 2",
        description: "A simple description for the second product.",
        price: "₹1,499",
        image: "images/image2.jpg"
    },
    {
        name: "Product 3",
        description: "A simple description for the third product.",
        price: "₹1,999",
        image: "images/image3.jpg"
    },
    {
        name: "Product 4",
        description: "A simple description for the fourth product.",
        price: "₹2,499",
        image: "images/image4.jpg"
    }
];


const productsContainer = document.getElementById("products");


products.forEach(function(product) {

    const productCard = document.createElement("div");
    productCard.className = "product";

    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">

        <div class="product-info">
            <h2 class="product-name">${product.name}</h2>

            <p class="product-description">
                ${product.description}
            </p>

            <div class="product-price">
                ${product.price}
            </div>
        </div>
    `;

    productsContainer.appendChild(productCard);
});
