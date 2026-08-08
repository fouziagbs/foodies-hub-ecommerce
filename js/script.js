let cart = JSON.parse(localStorage.getItem("cart")) || [];


// ADD PRODUCT

function addToCart(name, price){


    let existing = cart.find(item => item.name === name);


    if(existing){

        existing.quantity++;

    }

    else{


        cart.push({

            name:name,

            price:price,

            quantity:1

        });


    }


    localStorage.setItem("cart", JSON.stringify(cart));


    alert(name + " added to cart");


}




// DISPLAY CART


function displayCart(){


    let cartItems = document.getElementById("cart-items");


    let totalPrice = document.getElementById("total-price");



    if(!cartItems) return;



    cartItems.innerHTML="";


    let total=0;



    cart.forEach((item,index)=>{


        total += item.price * item.quantity;



        cartItems.innerHTML += `


        <div class="cart-item">


        <div>

        <h3>${item.name}</h3>

        <p>
        £${item.price}
        </p>

        </div>



        <div class="quantity-box">


        <button onclick="decreaseQuantity(${index})">
        -
        </button>


        <span>
        ${item.quantity}
        </span>


        <button onclick="increaseQuantity(${index})">
        +
        </button>


        </div>



        <button class="remove-btn"
        onclick="removeItem(${index})">

        Remove

        </button>



        </div>


        `;



    });



    totalPrice.innerHTML = total.toFixed(2);



}




// PLUS BUTTON


function increaseQuantity(index){


    cart[index].quantity++;


    saveCart();


}




// MINUS BUTTON


function decreaseQuantity(index){



    if(cart[index].quantity > 1){


        cart[index].quantity--;


    }

    else{


        cart.splice(index,1);


    }



    saveCart();


}





// REMOVE ITEM


function removeItem(index){


    cart.splice(index,1);


    saveCart();


}




// CLEAR CART


function clearCart(){


    cart=[];


    saveCart();


}




// SAVE CART


function saveCart(){


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    displayCart();


}





// LOAD CART WHEN PAGE OPENS


document.addEventListener(
"DOMContentLoaded",
displayCart
);