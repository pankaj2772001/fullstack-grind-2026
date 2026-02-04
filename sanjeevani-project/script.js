let cartCount = 0

function addToCart(){
    cartCount = cartCount + 1

    document.getElementById("cart-count").innerText = cartCount

    alert("Item added to cart! Total items: " + cartCount)
}


function toggleTheme(){

    let body = document.body


    body.classList.toggle("dark-mode")

    let btn = document.getElementById('theme-btn')

    if(body.classList.contains("dark-mode")){
        btn.innerText = "☀️ Light Mode";
    }else{
          btn.innerText = "🌙 Dark Mode";
    }
}


// The Product Database (Array of Strings)
// let products = ["Paracetamol", "Cough Syrup", "Vitamin C", "Bandages", "Protein Powder"];

// // 1. How to count items in the database? (.length)
// console.log("Total Products: " + products.length);

// // 2. How to get a specific item? (Index starts at 0)
// // 0 = First Item, 1 = Second Item...
// console.log("First Product: " + products[0]); // Paracetamol
// console.log("Last Product: " + products[4]); // Protein Powder

// The Professional Database
let products = [
    {
        name: "Paracetamol",
        price: 150,
        image: "https://placehold.co/200x200?text=Paracetamol"
    },
    {
        name: "Cough Syrup",
        price: 250,
        image: "https://placehold.co/200x200?text=Syrup"
    },
    {
        name: "Vitamin C",
        price: 300,
        image: "https://placehold.co/200x200?text=Vit+C"
    },
    {
        name: "Bandages",
        price: 50,
        image: "https://placehold.co/200x200?text=Bandage"
    },
    {
        name: "Masks",
        price: 20,
        image: "https://placehold.co/200x200?text=Masks"
    }
];

// function showAllProducts(){

//     for(let i = 0; i < products.length; i++){
//         console.log("Product #" + i + ": " + products[i]);
//     }

//     alert("Check the Console to see the inventory!");
// }


function showAllProducts() {

    for(let i = 0; i <products.length; i++){

       // Access specific details using the dot (.)
        console.log("Product: " + products[i].name + " | Price: ₹" + products[i].price);
    }

    alert("Database updated! Check Console for details.");
  }

  function renderProducts(){

    let container = document.getElementById('product-list');

    container.innerHTML = ""

    for(let i = 0; i < products.length; i++){

        let product = products[i]

        let cardHtml = `
            <article>
                <img src="${product.image}" alt="${product.name}" />
                <h3>${product.name}</h3>
                <p>Price: ₹${product.price}</p>
                <button onClick="addToCart()">Add to Cart</button>
            </article>
        `

        container.innerHTML += cardHtml
    }
  }

  renderProducts()