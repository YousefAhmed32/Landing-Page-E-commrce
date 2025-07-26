

let cart_productDivFAF = document.querySelector(".Write");
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

console.log(cartItems + "CartItems is successfully")

function renderCartItemsFAF() {
  cart_productDivFAF.innerHTML = "";
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  cartItems.forEach((item) => {
    cart_productDivFAF.innerHTML += `
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
                    <span>Price:
                     <span class="item_price" id="item_price_${item.id}">${item.price * item.quantity}</span>$</span>
                    <span>size:${item.size} </span>
                </div>
            </div>`;
  });
  updateCartTotal()

}

function updateQuantity(id, updataCount) {
  const counter = document.getElementById(`countert_${id}`);
  const itemPrice = document.getElementById(`item_price_${id}`);
  const product = products.find((item) => item.id === id);

  let currentCount = parseInt(counter.textContent);
  let newCount = currentCount + updataCount;

  if (newCount < 1) return;

  counter.textContent = newCount;

  const totalPrice = newCount * product.price;
  itemPrice.textContent = totalPrice.toFixed(2);

  updateCartTotal();
}

function updateCartTotal() {
  const allItemPrices = document.querySelectorAll(".item_price");
  let totalCartPrice = 0;

  allItemPrices.forEach((priceElem) => {
    totalCartPrice += parseFloat(priceElem.textContent);
  });

  document.getElementById("Total_price").innerText = totalCartPrice.toFixed(2);
}

cart_productDivFAF.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("decrease")) {
    const id = parseInt(target.dataset.id);
    updateQuantity(id, -1);
  } else if (target.classList.contains("increasement")) {
    const id = parseInt(target.dataset.id);
    updateQuantity(id, 1);
  }
});

let shoppingCartIcon = document.querySelector(".cart")
let cartsProducts = document.querySelector(".cart_product")
shoppingCartIcon.addEventListener("click", opencart)

function opencart() {
  if (cart_productDivFAF.innerHTML != "") {
    console.log("عاش يا يونس 2")
    if (cartsProducts.style.display == "block") {
      cartsProducts.style.display = "none"
    } else {
      cartsProducts.style.display = "block"
    }
  }
}
renderCartItemsFAF()
