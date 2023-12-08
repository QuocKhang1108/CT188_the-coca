const products = [
  {
    name: "Aquarius zero",
    image: "data/image/aquarius-zero.png",
    alt: "Aquarius zero",
    description: "Mo ta",
    flavors: [
      {
        name: "Không calo",
        value: "khongcalo",
      },
    ],
    sizes: [
      {
        name: "330ml",
        value: "330",
      },
    ],
  },
  {
    name: "CocaCola lon",
    image: "data/image/coca_nguyen_ban.png",
    alt: "CocaCola",
    description: "Mo ta",
    flavors: [
      {
        name: "Vị nguyên bản",
        value: "vinguyenban",
      },
      {
        name: "Không đường",
        value: "khongduong",
      },
    ],
    sizes: [
      {
        name: "330ml",
        value: "330",
      },
    ],
  },
  {
    name: "CocaCola chai",
    image: "data/image/coca-300ml-chai-nhua.png",
    description: "Mo ta",
    flavors: [
      {
        name: "Vị nguyên bản",
        value: "vinguyenban",
      },
    ],
    sizes: [
      {
        name: "300ml",
        value: "300",
      },
      {
        name: "591ml",
        value: "591",
      },
    ],
  },
  {
    name: "Fanta cam chai",
    image: "data/image/fanta_cam_390ml.png",
    description: "Mo ta",
    flavors: [
      {
        name: "Vị nguyên bản",
        value: "vinguyenban",
      },
    ],
    sizes: [
      {
        name: "390ml",
        value: "390",
      },
    ],
  },

  {
    name: "Fanta Sarsi RCG lon",
    image: "data/image/Fanta_Sarsi_RCG_320ml.png",
    description: "Mo ta",
    flavors: [
      {
        name: "Vị nguyên bản",
        value: "vinguyenban",
      },
    ],
    sizes: [
      {
        name: "320ml",
        value: "320",
      },
    ],
  },
  {
    name: "Fanta Strawberry",
    image: "data/image/fanta_Strawberry.png",
    description: "Mo ta",
    flavors: [
      {
        name: "Vị nguyên bản",
        value: "vinguyenban",
      },
    ],
    sizes: [
      {
        name: "330ml",
        value: "330",
      },
    ],
  },
  {
    name: "Fanta cam lon",
    image: "data/image/Fanta-cam-lon-330ml-1.png",
    description: "Mo ta",
    flavors: [
      {
        name: "Vị nguyên bản",
        value: "vinguyenban",
      },
    ],
    sizes: [
      {
        name: "330ml",
        value: "330",
      },
    ],
  },
  {
    name: "Fanta soda kem lon",
    image: "data/image/fanta-soda-kem-lon-320ml.png",
    description: "Mo ta",
    flavors: [
      {
        name: "Vị nguyên bản",
        value: "vinguyenban",
      },
    ],
    sizes: [
      {
        name: "320ml",
        value: "320",
      },
    ],
  },
  {
    name: "Fuze tea",
    image: "data/image/fuze_tea.png",
    description: "Mo ta",
    flavors: [
      {
        name: "Vị nguyên bản",
        value: "vinguyenban",
      },
    ],
    sizes: [
      {
        name: "450ml",
        value: "450",
      },
    ],
  },
  {
    name: "Fuze tea Glace",
    image: "data/image/fuze_tea_Glace.png",
    description: "Mo ta",
    flavors: [
      {
        name: "Vị nguyên bản",
        value: "vinguyenban",
      },
    ],
    sizes: [
      {
        name: "1250ml",
        value: "1250",
      },
    ],
  },
  {
    name: "Fuze tea Chanh",
    image: "data/image/fuze_tra_Chanh.png",
    description: "Mo ta",
    flavors: [
      {
        name: "Vị nguyên bản",
        value: "vinguyenban",
      },
    ],
    sizes: [
      {
        name: "450ml",
        value: "450",
      },
    ],
  },
  {
    name: "CocaCola plus",
    image: "data/image/nuoc_ngot_coca_plus_330_ml.png",
    description: "Mo ta",
    flavors: [
      {
        name: "Không đường",
        value: "khongduong",
      },
    ],
    sizes: [
      {
        name: "330ml",
        value: "330",
      },
    ],
  },
  {
    name: "Dasani",
    image: "data/image/nuoc-dasani-500ml.png",
    description: "Mo ta",
    flavors: [
      {
        name: "Vị nguyên bản",
        value: "vinguyenban",
      },
    ],
    sizes: [
      {
        name: "500ml",
        value: "500",
      },
    ],
  },
  {
    name: "Nutriboost",
    image: "data/image/nutriboost_banh_quy_kem.png",
    description: "Mo ta",
    flavors: [
      {
        name: "Bánh quy kem",
        value: "banhquykem",
      },
      {
        name: "Dâu",
        value: "dau",
      },
    ],
    sizes: [
      {
        name: "297ml",
        value: "297",
      },
    ],
  },
  {
    name: "Sprite lon",
    image: "data/image/sprite_330_ml.png",
    description: "Mo ta",
    flavors: [
      {
        name: "Vị nguyên bản",
        value: "vinguyenban",
      },
    ],
    sizes: [
      {
        name: "330ml",
        value: "330",
      },
    ],
  },
  {
    name: "Sprite chai",
    image: "data/image/sprite-huong-chanh-chai-390ml.png",
    description: "Mo ta",
    flavors: [
      {
        name: "Hương chanh",
        value: "huongchanh",
      },
    ],
    sizes: [
      {
        name: "390ml",
        value: "390",
      },
    ],
  },
];
const productContainer = document.querySelector("section.products-container");
for (let i = 0; i < products.length; i++) {
  const p = products[i];
  const productElemet = document.createElement("div");
  productElemet.className = "product";
  let flavorsHtml = "";
  for (let i = 0; i < p.flavors.length; i++) {
    flavorsHtml += `<option value="${p.flavors[i].value}">${p.flavors[i].name}</option>`;
  }
  let sizesHtml = "";
  for (let i = 0; i < p.sizes.length; i++) {
    sizesHtml += `<option value="${p.sizes[i].value}">${p.sizes[i].name}</option>`;
  }
  let html = `
        <div class="product__img">
            <img
              class="image"
              src="${p.image}"
              alt="${p.alt}"-
            />
            <div class="product__img--description">
              <p class="description">${p.description}</p>
            </div>
          </div>
          <h1 class="product__title">${p.name}</h1>
          <div class="product__select">
            <div>
              <h2 class="product__select--title">Hương vị</h2>
              <select class="product__select--option" size="1">
                ${flavorsHtml}
              </select>
            </div>
            <div>
              <h2 class="product__select--title">Size</h2>
              <select class="product__select--option" size="1">
                ${sizesHtml}
              </select>
            </div>
          </div>

          <button class="product__button">
            <span class="product__button--content">Add to cart</span>
          </button>
        `;
  productElemet.innerHTML = html;
  productContainer.appendChild(productElemet);
}


//--------------------------Cart javaScirpt--------------------------
const btun = document.querySelectorAll('.product__button')
//console.log(btun)

btun.forEach(function(button,index){
  //console.log(button,index)
button.addEventListener("click",function(event){{
  var btnItems = event.target
  var productitem = btnItems.parentElement
  var productImg = productitem.querySelector("img").src
  var productName = productitem.querySelector("h1").innerText
  var productprice = productitem.querySelector("span").innerText
  //console.log(productName,productImg,productprice)
  addcart(productImg, productName,productprice)
}})



})
//------------------------------addCart--------------------------

function addcart(productImg, productName,productprice){
  var addtr = document.createElement("tr")  
  var cartItem = document.querySelectorAll("tbody tr")
  for(var i=0; i<cartItem.length; i++){
    var productT = document.querySelectorAll('.tittle')
    if(productT[i].innerHTML==productName){
      alert("Your product already exists")
      return 0
    }
  }
  //var trcontent = productprice
  //var trcontent = productName
  var trcontent = '<tr><td style="display: flex; align-items: center;"><img style="width: 70px;" src="'+productImg+'" alt=""><span class="tittle">'+productName+'</span></td><td><p><span class="prices">'+productprice+'</span><sup>đ</sup></p></td><td><input type="number" style="width: 30px;outline: none;" value="1" min="1" ></td><td style="cursor: pointer;"><span class="deleteCart">Remove</span></td></tr>'
  addtr.innerHTML = trcontent
  var cartTable = document.querySelector("tbody")
  // console.log(cartTable )
  cartTable.append(addtr)
  cartTotal()
  deleteCart()

}
//----------------------Total--------------
function cartTotal(){
  var cartItem = document.querySelectorAll("tbody tr")
  var sum = 0 //----sum money
  //console.log(cartItem.length)
  for(var i=0; i<cartItem.length; i++){
    //console.log(i)
    var inputValue = cartItem[i].querySelector("input").value
    var productPrice = cartItem[i].querySelector(".prices").innerHTML

    //-----compute price----
    totalPrice_A = inputValue*productPrice*1000
    sum +=totalPrice_A
    //console.log(sum)
    // totalPrice_B = sum.toLocaleString('de-DE')
  }

  var price_total = document.querySelector(".price-total span")
  var number = document.querySelector(".navbar__icon span")
  price_total.innerHTML = sum.toLocaleString('de-DE')
  number.innerHTML = cartItem.length
  inputchange()
  //console.log(price_total)
}

//-----------------------------delete cart ------------------------
function deleteCart(){
  var cartItem = document.querySelectorAll("tbody tr")
  for(var i=0; i<cartItem.length; i++){
    var productT = document.querySelectorAll('.deleteCart')
    productT[i].addEventListener("click",function(event){
      var cartdelete = event.target
      var deleteItem =cartdelete.parentElement.parentElement
      deleteItem.remove()
      //console.log(deleteItem)
      cartTotal()
    }) 
  }
}

  
function inputchange(){
  var cartItem = document.querySelectorAll("tbody tr")
  for(var i=0; i<cartItem.length; i++){
    var input_value = cartItem[i].querySelector('input')
    input_value.addEventListener("change",function(){
      cartTotal()

    })
  }
}


const cartbtn = document.querySelector('.fa-times')
const cartshow = document.querySelector('.fa-shopping-bag')
cartshow.addEventListener("click",function(){
  document.querySelector('.cart').style.right = "0"
})
cartbtn.addEventListener("click",function(){
  document.querySelector('.cart').style.right = "-100%"
})
