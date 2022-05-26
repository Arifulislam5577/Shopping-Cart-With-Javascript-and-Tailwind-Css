const productArea = document.getElementById("productArea");
let cart = [];
const addToCart = async (id) => {
  const data = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await data.json();
  cart = [...cart, product];
  console.log(cart);
};

const fetchData = async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const result = await data.json();
  result.map((product) => {
    const html = `<div class="md:cols-span-1 w-full border shadow p-5">
            <div class="img-area mb-5">
              <img
                src=${product.image}
                alt="product"
                class="h-20 text-center mx-auto"
              />
            </div>
            <div class="des mx-auto text-center flex flex-col gap-3">
              <h3 class="text-center text-base font-bold text-black">
                ${product.title}
              </h3>
              <h4>Price: $${product.price}</h4>
              <button class="py-2 px-5 mx-auto bg-black rounded text-white" onclick="addToCart(${product.id})">
                Add to cart
              </button>
            </div>
          </div>`;

    productArea.insertAdjacentHTML("afterbegin", html);
  });
};

fetchData();
