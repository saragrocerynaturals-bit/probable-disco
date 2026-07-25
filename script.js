const products = [
{
name:"HDPE Grow Bag 12x12",
price:249,
image:"growbag.png"
},
{
name:"HDPE Grow Bag 12x15",
price:199,
image:"growbag12x15.png"
},
{
name:"Cocopeat Block 5 KG",
price:249,
image:"Cocopeat .png"
}
];

const productList = document.getElementById("product-list");

let cart = [];

products.forEach(product => {
productList.innerHTML += `
<div class="card">
<img src="${product.image}" alt="${product.name}">
<h3>${product.name}</h3>
<p>₹${product.price}</p>

<button class="btn" onclick="addToCart('${product.name}',${product.price})">
🛒 Add to Cart
</button>

</div>
`;
});

function addToCart(name, price){
cart.push({name,price});

document.getElementById("cart-count").innerText = cart.length;

alert(name + " Added to Cart");
}

function checkoutWhatsApp(){

if(cart.length==0){
alert("Cart is Empty");
return;
}

let message="Hello, I want to order:%0A%0A";

let total=0;

cart.forEach((item,index)=>{
message += `${index+1}. ${item.name} - ₹${item.price}%0A`;
total += item.price;
});

message += `%0ATotal : ₹${total}`;

window.open(
`https://wa.me/918428538170?text=${message}`,
"_blank"
);

} 
function addProduct(){

const name=document.getElementById("pname").value;
const price=document.getElementById("pprice").value;
const image=document.getElementById("pimage").value;

if(name=="" || price=="" || image==""){
alert("Fill all fields");
return;
}

products.push({
name:name,
price:Number(price),
image:image
});

productList.innerHTML="";

products.forEach(product=>{

productList.innerHTML += `
<div class="card">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<button class="btn" onclick="addToCart('${product.name}',${product.price})">
🛒 Add to Cart
</button>

</div>
`;

});

alert("Product Added Successfully");

document.getElementById("pname").value="";
document.getElementById("pprice").value="";
document.getElementById("pimage").value="";

} function adminLogin(){

let pass=document.getElementById("adminPass").value;

if(pass==="1234"){

alert("Login Successful");

document.getElementById("login-box").style.display="none";

}else{

alert("Wrong Password");

}

}
