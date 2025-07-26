let allproduct = document.querySelector(".allDraws");
let products = [
  { id: 1, title: "Hody Cvoms", imgurl: "img/Designer (8).jpeg", color: "grey", price: 549, category: "clothes" },
  { id: 2, title: "TMalo 24nd Cvoms", imgurl: "img/Designer (4).jpeg", color: "grey", price: 899, category: "clothes" },
  { id: 3, title: "TMalo 24nd Cvoms", imgurl: "img/Designer (14).jpeg", color: "grey", price: 499, category: "shoes" },
  { id: 4, title: "Fghd ou11 Hop", imgurl: "img/Designer (20).jpeg", color: "grey", price: 1399, category: "accessories" },
  { id: 5, title: "Soeiur 13p dsmKs", imgurl: "img/Designer (5).jpeg", color: "grey", price: 1599, category: "sport" },
  { id: 6, title: "pbad 56tm fnim", imgurl: "img/Designer (6).jpeg", color: "grey", price: 1199, category: "shoes" },
  { id: 7, title: "SSH23SAER19713TM1 - Blue", imgurl: "img/Designer RM1.png", color: "black", price: 1200, category: "accessories" },
  { id: 8, title: "SCJ250 - Black", imgurl: "img/gens (2).png", color: "black", price: 1200, category: "gens" },
  { id: 9, title: "SSH160 - Black", imgurl: "img/gens (3).png", color: "black", price: 1200, category: "gens" },
  { id: 10, title: "WEK168 - black", imgurl: "img/gens (4).png", color: "black", price: 1200, category: "gens" },
  { id: 11, title: "MST146 - Black", imgurl: "img/gens (1).png", color: "black", price: 1200, category: "gens" },
  { id: 12, title: "POD56 - white", imgurl: "img/shose (2).png", color: "black", price: 1200, category: "gens" },
  { id: 13, title: "MS96 - white", imgurl: "img/shose (4).png", color: "black", price: 1200, category: "gens" },
  { id: 14, title: "ASD56 - Black", imgurl: "img/shose (3).png", color: "black", price: 1200, category: "gens" },
  { id: 15, title: "BAD43 - white", imgurl: "img/shose (1).png", color: "black", price: 1200, category: "gens" },
];




let cart_productDiv = document.querySelector(".Write");

// Add------------------------------------------------
function addToCart(id) {
  let choosenItem = products.find((item) => item.id === id);

  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  let existingItem = cartItems.find((item) => item.id === id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({ ...choosenItem, quantity: 1 });
  }


  localStorage.setItem("cartItems", JSON.stringify(cartItems));


  renderCartItems();
}
function renderCartItems() {
  cart_productDiv.innerHTML = "";
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  cartItems.forEach((item) => {
    cart_productDiv.innerHTML += `
          <div class="line mt-3 mb-2"></div>
          <div class="sides" id="cart_item_${item.id}">
              <div class="side1">
                  <img src="${item.imgurl}" alt="" style="width: 150px; height: 250px;">
              </div>
              <div class="side2 ms-4">
                  <p class="mt-5">${item.title}</p>



                    <div class="d-inline-block counter-items  border-blackborder-1">
                        <button class="decrease decreasecss  border-0" data-id="${item.id}">-</button>
                        <div id="countert_${item.id}" style="width: 40px;" class="border-0 d-inline countert">${item.quantity}</div>
                        <button class="increasement z-3  increasmentcss  border-0" data-id="${item.id}">+</button>
                    </div>

             


                  <br>
                  <span>Price: <span class="item_price" id="item_price_${item.id}">${item.price * item.quantity}</span>$</span>
              </div>
          </div>`;
  });

  let Cartpromax = document.querySelector(".allDraws")

  cartItems.forEach((item) => {
    Cartpromax.innerHTML += `
       <div class="itemcart container" id="write2">
         <div class="container_detials_1${item.id}">
<img id="img_cart" src="${item.imgurl}" alt="">
</div>
<div class="container_detials_2">
  <p>${item.title} </p>
  <p> Price: ${item.price}$</p>
  <p>Size:${item.size}</p>
  <p>Color: Emrald</p>
  Quantity
  <div class=" d-inline-block counter-items ms-3 ">

  <button class="decrease decreasecss  border-0 " data-id="${item.id}">-</button>
  <div id="countert2_${item.id}" style="width: 40px;" class="d-inline countert">${item.quantity}</div>
    <button class="increasement increasmentcss border-0" data-id="${item.id}">+</button>  
    
  

    
  </div>
      <p class=" p-1 " id="item_price2_${item.id}" >${item.price * item.quantity} $</p>

</div>
          

<i class="fa-solid fa-xmark d-inline-block ms-auto mb-auto m-4 fs-5  "></i>
</div>`;
  });

  updateCartTotal();
}


function updateQuantity(id, updataCount) {
  const counter = document.getElementById(`countert_${id}`);
  const counter2 = document.getElementById(`countert2_${id}`);

  const itemPrice = document.getElementById(`item_price_${id}`);
  const itemPrice2 = document.getElementById(`item_price2_${id}`);
  const product = products.find((item) => item.id === id);

  let currentCount = parseInt(counter.textContent);
  let newCount = currentCount + updataCount;


  if (newCount < 1) return;


  let counter_22 = [counter, counter2]
  counter_22.forEach((counter_22 => {
    counter_22.textContent = newCount;
  }))

  const totalPrice = newCount * product.price;
  itemPrice.textContent = totalPrice.toFixed(2);
  itemPrice2.textContent = totalPrice.toFixed(2);


  updateCartTotal();
}



function updateCartTotal() {
  const allItemPrices = document.querySelectorAll(".item_price");
  let totalCartPrice = 0;

  allItemPrices.forEach((priceElem) => {
    totalCartPrice += parseFloat(priceElem.textContent);
  });

  document.getElementById("Total_price").innerText = totalCartPrice.toFixed(2);
  var xprice = document.getElementById("Total_price2").innerText = totalCartPrice.toFixed(2);
  let discount_1 = parseInt(document.getElementById("discount_1").textContent)
  let discount_2 = parseInt(document.getElementById("discount_2").textContent)
  let totalDiscount = discount_1 + discount_2
  document.getElementById("finalPrice").innerText = (addDiscount(xprice, totalDiscount))
}


let homeandcart = [cart_productDiv, allproduct]
homeandcart.forEach((homeandcart) => {
  homeandcart.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("decrease")) {
      const id = parseInt(target.dataset.id);
      updateQuantity(id, -1);
    } else if (target.classList.contains("increasement")) {
      const id = parseInt(target.dataset.id);
      updateQuantity(id, 1);
    }
  });
})





function check() {
  if (localStorage.getItem("username")) {
    window.location = "login.html"
  }
  else {
    window.location = "cart.html"
  }
}

let shoppingCartIcon = document.querySelector(".cart")
let cartsProducts = document.querySelector(".cart_product")
shoppingCartIcon.addEventListener("click", opencart)

function opencart() {
  if (cart_productDiv.innerHTML != "") {
    console.log("عاش يا يونس 2")
    if (cartsProducts.style.display == "block") {
      cartsProducts.style.display = "none"
    } else {
      cartsProducts.style.display = "block"
    }
  }
}

let nameUser = document.querySelector("#user_data")
let userinfo = document.querySelector("#user-form")
let links = document.querySelector("#links")


if (localStorage.getItem("username")) {
  links.remove()
  userinfo.style.display = "flex";
  nameUser.innerHTML = localStorage.getItem("username")
  console.log("hello home")

}


// Discount
function addDiscount(totalPrice, DiscountRate) {
  if (DiscountRate < 0 || DiscountRate > 100) {
    console.error("invalid discount percentage")
    return totalPrice;
  }

  const discountAmount = (totalPrice * DiscountRate) / 100;
  const discountedPrice = totalPrice - discountAmount;
  document.getElementById("dicount").innerText = discountAmount.toFixed(2);
  let discount_1 = parseInt(document.getElementById("discount_1").textContent)
  let discount_2 = parseInt(document.getElementById("discount_2").textContent)


  let fristDiscount = (totalPrice * discount_1) / 100;
  let secondDiscount = (totalPrice * discount_2) / 100;


  document.getElementById("fristDiscount").innerText = fristDiscount.toFixed(2);
  document.getElementById("secondDiscount").innerText = secondDiscount.toFixed(2);

  return discountedPrice.toFixed(2)


}




renderCartItems()
