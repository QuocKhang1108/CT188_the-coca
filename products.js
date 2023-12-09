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
    description:
      "Chai Nước Uống Thể Thao Aquarius chai 390ml là nước bù khoáng cho thể thao mang hương vị êm dịu giúp giải tan cơn khát của bạn. chai nước uống vận động Aquarius 390ml chính hãng nước bù khoáng Aquarius với thành phần gồm muối, Kali và chất Guarana có chức năng trì hoãn cảm giác mệt mỏi, giúp duy trì cơ thể hoạt động ở mức ổn định.",
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
    description:
      "Lon Nước Giải Khát Coca-Cola vị Nguyên Bản Original Lon 320ml là loại nước ngọt được nhiều người yêu thích với hương vị thơm ngon, sảng khoái. lon nước ngọt Coca Cola 320ml chính hãng nước ngọt Coca Cola với lượng gas lớn sẽ giúp bạn xua tan mọi cảm giác mệt mỏi, căng thẳng, đem lại cảm giác thoải mái sau khi hoạt động ngoài trời.",
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
    description:
      "Chai Nước Giải Khát Coca-Cola vị Nguyên Bản Original Lon 320ml là loại nước ngọt được nhiều người yêu thích với hương vị thơm ngon, sảng khoái. Chai nước ngọt Coca Cola 320ml chính hãng nước ngọt Coca Cola với lượng gas lớn sẽ giúp bạn xua tan mọi cảm giác mệt mỏi, căng thẳng, đem lại cảm giác thoải mái sau khi hoạt động ngoài trời.",
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
    description:
      "Chai Nước Giải Khát Có Gas Fanta Cam Lon 320ml là sản phẩm nước ngọt có gas của thương hiệu nước ngọt Fanta nổi tiếng giúp giải khát sau khi hoạt động ngoài trời, giải tỏa căng thẳng, mệt mỏi khi học tập, làm việc. ",
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
    description:
      "Lon Nước Giải Khát Fanta sarsi RCG Lon 320ml là loại nước ngọt được nhiều người yêu thích với hương vị thơm ngon, sảng khoái. lon Fanta sarsi RCG 320ml chính hãng nước ngọt Coca Cola với lượng gas lớn sẽ giúp bạn xua tan mọi cảm giác mệt mỏi, căng thẳng, đem lại cảm giác thoải mái sau khi hoạt động ngoài trời.",
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
    description:
      "Lon Nước Giải Khát Fanta Stawberry Lon 320ml là loại nước ngọt được nhiều người yêu thích với hương vị thơm ngon, sảng khoái. lon Fanta Stawberry 320ml chính hãng nước ngọt Coca Cola với lượng gas lớn sẽ giúp bạn xua tan mọi cảm giác mệt mỏi, căng thẳng, đem lại cảm giác thoải mái sau khi hoạt động ngoài trời.",
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
    description:
      "Lon Nước Giải Khát Fanta camLon 320ml là loại nước ngọt được nhiều người yêu thích với hương vị thơm ngon, sảng khoái. lon Fanta cam 320ml chính hãng nước ngọt Coca Cola với lượng gas lớn sẽ giúp bạn xua tan mọi cảm giác mệt mỏi, căng thẳng, đem lại cảm giác thoải mái sau khi hoạt động ngoài trời.",
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
    description:
      "Lon Nước Giải Khát Fanta soda kem Lon 320ml là loại nước ngọt được nhiều người yêu thích với hương vị thơm ngon, sảng khoái. lon Fanta soda kem 320ml chính hãng nước ngọt Coca Cola với lượng gas lớn sẽ giúp bạn xua tan mọi cảm giác mệt mỏi, căng thẳng, đem lại cảm giác thoải mái sau khi hoạt động ngoài trời.",
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
    description:
      "Chai trà chanh dây và hạt chia Fuzetea+ 450ml/ chai) là kết hợp giữa những lá trà xanh, hạt chia cùng vị chanh dây thơm ngọt. Nước trà giúp tăng cường năng lượng, vitamin cùng các dưỡng chất cần thiết khác cho cơ thể. Trà Fuze Tea không chứa chất béo, giúp cơ thể bù đắp nước, bổ sung năng lượng và vitamin.",
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
    description:
      "Chai trà đào và hạt chia Fuzetea+ 450ml/ chai) là kết hợp giữa những lá trà xanh, hạt chia cùng vị đào thơm ngọt. Nước trà giúp tăng cường năng lượng, vitamin cùng các dưỡng chất cần thiết khác cho cơ thể. Trà Fuze Tea không chứa chất béo, giúp cơ thể bù đắp nước, bổ sung năng lượng và vitamin.",
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
    description:
      "Chai trà chanh và sả Fuzetea+ 450ml/ chai) là kết hợp giữa những lá trà xanh, sả cùng vị chanh thơm ngọt. Nước trà giúp tăng cường năng lượng, vitamin cùng các dưỡng chất cần thiết khác cho cơ thể. Trà Fuze Tea không chứa chất béo, giúp cơ thể bù đắp nước, bổ sung năng lượng và vitamin.",
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
    description:
      "Lon Nước Giải Khát Coca-Cola Plus Lon 320ml là loại nước ngọt được nhiều người yêu thích với hương vị thơm ngon, sảng khoái. lon nước ngọt Coca Cola Plus 320ml chính hãng nước ngọt Coca Cola với lượng gas lớn sẽ giúp bạn xua tan mọi cảm giác mệt mỏi, căng thẳng, đem lại cảm giác thoải mái sau khi hoạt động ngoài trời.",
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
    name: "Nước suối Dasani",
    image: "data/image/nuoc-dasani-500ml.png",
    description:
      "Chai Nước suối Dasani 24x510ml từ nguồn nước ngầm thông qua hệ thống thẩm thấu ngược và thanh trùng bằng Ozone, đảm bảo sự thanh khiết trong từng giọt nước giúp thanh lọc cơ thể hoàn hảo của nước Dasani. Lốc 24 chai Nước suối Dasani 24x510ml khi uống có vị tinh khiết, thanh mát giúp cơ thể bù nước",
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
    description:
      "Chai Thức Uống Sữa Trái Cây Nutriboost Hương Bánh Quy Kem (297ml/Chai) là hỗn hợp sữa thông minh kết hợp giữa sữa và các nguyên liệu.",
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
    description:
      "Lon Nước Giải Khát Có Gas Sprite Lon 320ml là sản phẩm nước ngọt thơm ngon hấp dẫn được yêu chuộng trên thế giới đến từ thương hiệu nước ngọt Sprite. lon nước ngọt Sprite hương chanh 320ml dạng thùng tiện lợi, tiết kiệm, sử dụng lâu cho nhiều người như gia đình, hàng quán hay những bữa tiệc, tụ tập bạn bè",
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
    description:
      "Chai Nước Giải Khát Sprite Có Gas là sản phẩm nước ngọt thơm ngon hấp dẫn được yêu chuộng trên thế giới đến từ thương hiệu nước ngọt Sprite. Chai nước ngọt Sprite hương chanh 320ml dạng thùng tiện lợi, tiết kiệm, sử dụng lâu cho nhiều người như gia đình, hàng quán hay những bữa tiệc, tụ tập bạn bè",
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
    "product col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4 pb-4 pt-4";
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
