//--------------------------Cart javaScirpt--------------------------
const btun = document.querySelectorAll(".product__button");
//console.log(btun)

btun.forEach(function (button, index) {
  //console.log(button,index)
  button.addEventListener("click", function (event) {
    {
      var btnItems = event.target;
      var productitem = btnItems.parentElement;
      var productImg = productitem.querySelector("img").src;
      var productName = productitem.querySelector("h1").innerText;
      var productprice = productitem.querySelector("span").innerText;
      //console.log(productName,productImg,productprice)
      addcart(productImg, productName, productprice);
    }
  });
});
//------------------------------addCart--------------------------

function addcart(productImg, productName, productprice) {
  var addtr = document.createElement("tr");
  var cartItem = document.querySelectorAll("tbody tr");
  for (var i = 0; i < cartItem.length; i++) {
    var productT = document.querySelectorAll(".tittle");
    if (productT[i].innerHTML == productName) {
      alert("Your product already exists");
      return 0;
    }
  }
  //var trcontent = productprice
  //var trcontent = productName
  var trcontent =
    '<tr><td style="display: flex; align-items: center;"><img style="width: 70px;" src="' +
    productImg +
    '" alt=""><span class="tittle">' +
    productName +
    '</span></td><td><p><span class="prices">' +
    productprice +
    '</span><sup>đ</sup></p></td><td><input type="number" style="width: 30px;outline: none;" value="1" min="1" ></td><td style="cursor: pointer;"><span class="deleteCart">Remove</span></td></tr>';
  addtr.innerHTML = trcontent;
  var cartTable = document.querySelector("tbody");
  // console.log(cartTable )
  cartTable.append(addtr);
  cartTotal();
  deleteCart();

  // Lưu thông tin giỏ hàng vào localStorage
  var productData = {
    img: productImg,
    name: productName,
    price: productprice
  };
  var cart = JSON.parse(localStorage.getItem('cart')) || [];
  var existingProduct = cart.find(item => item.name === productName);
  if (!existingProduct) {
    cart.push(productData);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
//----------------------Total--------------
function cartTotal() {
  var cartItem = document.querySelectorAll("tbody tr");
  var sum = 0; //----sum money
  //console.log(cartItem.length)
  for (var i = 0; i < cartItem.length; i++) {
    //console.log(i)
    var inputValue = cartItem[i].querySelector("input").value;
    var productPrice = cartItem[i].querySelector(".prices").innerHTML;

    //-----compute price----
    totalPrice_A = inputValue * productPrice * 1000;
    sum += totalPrice_A;
    //console.log(sum)
    // totalPrice_B = sum.toLocaleString('de-DE')
  }

  var price_total = document.querySelector(".price-total span");
  var number = document.querySelector(".navbar__icon span");
  price_total.innerHTML = sum.toLocaleString("de-DE");
  number.innerHTML = cartItem.length;
  inputchange();
  //console.log(price_total)
}

//-----------------------------delete cart ------------------------
function deleteCart() {
  var cartItem = document.querySelectorAll("tbody tr");
  for (var i = 0; i < cartItem.length; i++) {
    var productT = document.querySelectorAll(".deleteCart");
    productT[i].addEventListener("click", function (event) {
      var cartdelete = event.target;
      var deleteItem = cartdelete.parentElement.parentElement;
      deleteItem.remove();
      //console.log(deleteItem)
      cartTotal();
      // Xóa sản phẩm khỏi localStorage
      var productName = deleteItem.querySelector(".tittle").innerText;
      var cart = JSON.parse(localStorage.getItem('cart')) || [];
      var updatedCart = cart.filter(item => item.name !== productName);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    });
  }
}

function inputchange() {
  var cartItem = document.querySelectorAll("tbody tr");
  for (var i = 0; i < cartItem.length; i++) {
    var input_value = cartItem[i].querySelector("input");
    input_value.addEventListener("change", function () {
      cartTotal();
    });
  }
}
window.addEventListener('load', function() {
  var cartData = JSON.parse(localStorage.getItem('cart'));
  if (cartData) {
    cartData.forEach(function(item) {
      addcart(item.img, item.name, item.price);
    });
  }
});
window.addEventListener('beforeunload', function() {
  var cartItem = document.querySelectorAll("tbody tr");
  var cart = [];
  for (var i = 0; i < cartItem.length; i++) {
    var productName = cartItem[i].querySelector(".tittle").innerText;
    var productPrice = cartItem[i].querySelector(".prices").innerText;
    var productImg = cartItem[i].querySelector("img").src;

    cart.push({
      img: productImg,
      name: productName,
      price: productPrice
    });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
});

const cartbtn = document.querySelector(".fa-times");
const cartshow = document.querySelector(".fa-shopping-bag");
cartshow.addEventListener("click", function () {
  document.querySelector(".cart").style.right = "0";
});
cartbtn.addEventListener("click", function () {
  document.querySelector(".cart").style.right = "-100%";
});
