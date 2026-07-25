const products = [
{
name:"HDPE Grow Bag 12x12",
price:"₹249",
image:"growbag.png"
},
{
name:"HDPE Grow Bag 12x15",
price:"₹199",
image:"growbag12x15.png"
},
{
name:"Cocopeat Block 5 KG",
price:"₹249",
image:"cocopeat.png"
}
];

const productList = document.getElementById("product-list");

if (productList) {
products.forEach(product => {
productList.innerHTML += `
<div class="card">
<img src="${product.image}" alt="${product.name}">
<h3>${product.name}</h3>
<p>${product.price}</p>
<a class="btn" href="https://wa.me/918428538170?text=I want to buy ${encodeURIComponent(product.name)}">Buy Now</a>
</div>
`;
});
}
