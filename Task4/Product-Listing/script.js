const products = [

{
    name:"Laptop",
    category:"Electronics",
    price:50000,
    rating:4.8
},

{
    name:"Smartphone",
    category:"Electronics",
    price:30000,
    rating:4.6
},

{
    name:"Headphones",
    category:"Electronics",
    price:2500,
    rating:4.3
},

{
    name:"Shoes",
    category:"Fashion",
    price:3000,
    rating:4.5
},

{
    name:"Jacket",
    category:"Fashion",
    price:4500,
    rating:4.4
},

{
    name:"T-Shirt",
    category:"Fashion",
    price:1000,
    rating:4.1
},

{
    name:"JavaScript Book",
    category:"Books",
    price:700,
    rating:4.9
},

{
    name:"HTML & CSS Guide",
    category:"Books",
    price:500,
    rating:4.7
}

];

const productContainer =
document.getElementById("productContainer");

const categoryFilter =
document.getElementById("categoryFilter");

const sortOption =
document.getElementById("sortOption");

displayProducts(products);

categoryFilter.addEventListener(
"change",
filterAndSort
);

sortOption.addEventListener(
"change",
filterAndSort
);

function filterAndSort(){

let filteredProducts = [...products];

const category =
categoryFilter.value;

const sort =
sortOption.value;

if(category !== "all"){

    filteredProducts =
    filteredProducts.filter(
    product =>
    product.category === category
    );
}

if(sort === "priceLow"){

    filteredProducts.sort(
    (a,b)=>a.price-b.price
    );
}

else if(sort === "priceHigh"){

    filteredProducts.sort(
    (a,b)=>b.price-a.price
    );
}

else if(sort === "rating"){

    filteredProducts.sort(
    (a,b)=>b.rating-a.rating
    );
}

displayProducts(filteredProducts);
}

function displayProducts(productsArray){

productContainer.innerHTML = "";

productsArray.forEach(product => {

const card =
document.createElement("div");

card.classList.add("card");

card.innerHTML = `
<h3>${product.name}</h3>
<p><strong>Category:</strong>
${product.category}</p>

<p><strong>Price:</strong>
₹${product.price}</p>

<p><strong>Rating:</strong>
⭐ ${product.rating}</p>
`;

productContainer.appendChild(card);

});
}