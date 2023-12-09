//xu ly search
document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product__title");
  let cards = document.querySelectorAll(".product");
  console.log(searchInput);
  elements.forEach((element, index) => {
    if (element.innerText.toLowerCase().includes(searchInput.toLowerCase())) {
      cards[index].style.display = "";
    } else {
      cards[index].style.display = "none";
    }
  });
});

// ds sp
const products = [
  {
    name: "Aquarius zero",
    image: "data/image/aquarius-zero.png",
    alt: "Aquarius zero",
    description: "Mo ta",
    //
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
    //
    price: "10.000",
  },
  {
    name: "CocaCola lon",
    image: "data/image/coca_nguyen_ban.png",
    alt: "CocaCola",
    description: "Mo ta",
    //
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
    //
    price: "12.000",
  },
  {
    name: "CocaCola chai",
    image: "data/image/coca-300ml-chai-nhua.png",
    description: "Mo ta",
    //
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
    //
    price: "8.000",
  },
  {
    name: "Fanta cam chai",
    image: "data/image/fanta_cam_390ml.png",
    description: "Mo ta",
    //
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
    //
    price: "9.000",
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
    price: "10.000",
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
    price: "10.000",
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
    price: "10.000",
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
    price: "10.000",
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
    price: "10.000",
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
    price: "10.000",
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
    price: "10.000",
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
    price: "12.000",
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
    price: "10.000",
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
    price: "8.000",
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
    price: "10.000",
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
    price: "10.000",
  },
];

const productRow = document.querySelector("div.row");
for (let i = 0; i < products.length; i++) {
  const p = products[i];
  const productElemet = document.createElement("div");
  productElemet.className =
    "product col-6 col-sm-4 col-md-3 col-lg-3 mb-4 pb-4 pt-4";
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
        <div class="product__price">
            <p><span>${p.price}</span><sup>đ</sup></p>
          </div>
        <button class="product__button">Add to cart
        </button>
        
        `;
  productElemet.innerHTML = html;
  productRow.appendChild(productElemet);
}
