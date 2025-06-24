
renderADDItems()
let products = [
  { id: 1, title: "Hody Cvoms", imgurl: "img/Designer (8).jpeg", color: "grey", price: 549 },
  { id: 2, title: "TMalo 24nd Cvoms", imgurl: "img/Designer (4).jpeg", color: "grey", price: 899 },
  { id: 3, title: "TMalo 24nd Cvoms", imgurl: "img/Designer (14).jpeg", color: "grey", price: 499 },
  { id: 4, title: "Fghd ou11 Hop", imgurl: "img/Designer (20).jpeg", color: "grey", price: 1399 },
  { id: 5, title: "Soeiur 13p dsmKs", imgurl: "img/Designer (5).jpeg", color: "grey", price: 1599 },
  { id: 6, title: "pbad 56tm fnim", imgurl: "img/Designer (6).jpeg", color: "grey", price: 1199 },
  { id: 7, title: "SSH23SAER19713TM1 - Blue", imgurl: "img/Designer RM1.png", color: "black", price: 1200 },
];

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete_favourite")) {
    const productId = event.target.dataset.id;
    const productElement = document.getElementById(`product_${productId}`);
    productElement.classList.add("hidden");

    setTimeout(() => {
      deleteFromFavorite(productId);
    }, 500)
  }
});

function deleteFromFavorite(id) {
  let FavoriteProductADD = JSON.parse(localStorage.getItem("FavoriteADD")) || [];
  FavoriteProductADD = FavoriteProductADD.filter((item) => item.id !== parseInt(id));
  localStorage.setItem("FavoriteADD", JSON.stringify(FavoriteProductADD));
  renderADDItems();
}

function renderADDItems() {
  const favouritePPP = document.getElementById("favouritePP");
  favouritePPP.innerHTML = "";
  let FavoriteProductADD = JSON.parse(localStorage.getItem("FavoriteADD")) || [];

  FavoriteProductADD.forEach((pro) => {
    favouritePPP.innerHTML += `
    <div class="product_item col-xxl-4 col-lg-3 col-md-4 col-sm-6" id="product_${pro.id}">

      <div class="item-top position-relative">
        <img src="${pro.imgurl}" alt="" class="object-fit-cover img_item">
     
         <i class="fa-solid fa-xmark delete_favourite" data-id="${pro.id}"></i>
         
      
      <div class="sizes">
               
                
               <div id="size-container">
                   <button class="size-btn" data-size="S">S</button>
                   <button class="size-btn" data-size="M">M</button>
                   <button class="size-btn" data-size="L">L</button>
                   <button class="size-btn" data-size="XL">XL</button>
                   <button class="size-btn" data-size="XXL">XXL</button>
              <button onClick="addToCartFromFavourite(${pro.id})"  class="d-block btn btn-dark w-100 rounded-0" style="margin: 10px auto;">Add to Cart</button>

               </div>

               <!-- <hr> -->
            </div>   
      </div>
         
      
      <div class="container-fluid item_des">
        <h4 class="p-0 position-relative">
          ${pro.title}
        </h4>
        <p class="m-1 fw-bolder">Price: ${pro.price}$</p>
    
        <span class="fw-bolder">Clothes Shirt</span>
      </div>
      
  

              
    </div>

    

  `;
  });

}
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("size-btn")) {
    const sizeButtons = event.target.parentNode.querySelectorAll(".size-btn ");
    sizeButtons.forEach((btn) => btn.classList.remove("active"));
    event.target.classList.add("active");
  }

});

function addToCartFromFavourite(id) {
  const productElement = document.querySelector(`#product_${id}`);
  const selectedSizeBtn = productElement.querySelector(".size-btn.active");
  setTimeout(() => {
    location.reload();
  }, 500);
  if (!selectedSizeBtn) {
    alert("Please select a size before adding to cart.");
    return;
  }

  const selectedSize = selectedSizeBtn.dataset.size;

  let choosenItem = products.find((item) => item.id === id);


  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  let existingItem = cartItems.find((item) => item.id === id && item.size === selectedSize);
  if (existingItem) {

    existingItem.quantity += 1;
  } else {
    cartItems.push({ ...choosenItem, size: selectedSize, quantity: 1 });
  }


  localStorage.setItem("cartItems", JSON.stringify(cartItems));


  renderCartItems();

}








