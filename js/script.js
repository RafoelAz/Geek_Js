const products = [
  {
    id: "id-01",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, ullam amet quisquam, nulla saepe blanditiis alias, non incidunt repellat? non minima eius, vitae nulla dolorum",
    price: 5000,
    img: "img/01.jpg",
  },
  {
    id: "id-02",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, ullam amet quisquam, nulla saepe blanditiis alias, non incidunt repellat? non minima eius, vitae nulla dolorum",
    price: 6000,
    img: "img/01.jpg",
  },
  {
    id: "id-03",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, ullam amet quisquam, nulla saepe blanditiis alias, non incidunt repellat? non minima eius, vitae nulla dolorum",
    price: 7000,
    img: "img/01.jpg",
  },
  {
    id: "id-04",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, ullam amet quisquam, nulla saepe blanditiis alias, non incidunt repellat? non minima eius, vitae nulla dolorum",
    price: 8000,
    img: "img/01.jpg",
  },
];

const basket = {
  products: [],
  total: 0,
};

function generateCatalog() {
  const productsContainer = document.getElementById("products-container");

  products.forEach((product) => {
    const html = `
      <div class="catalog__card">
        <img src="${product.img}" alt="" class="catalog__card-img" />
        <div class="catalog__card-id">${product.id}</div>
        <div class="catalog__card-desc">
          ${product.description}
        </div>
        <div class="catalog__card-cost">${product.price}$</div>
        <button class="catalog__card-btn" data-product-id="${product.id}">PUSH TO BASKET</button>
      </div>
    `;

    productsContainer.innerHTML += html;
  });

  const btns = Array.from(document.querySelectorAll(".catalog__card-btn"));

  btns.forEach((b) =>
    b.addEventListener("click", (e) => {
      const productId = e.target.dataset.productId;
      const foundProduct = products.find(function (p) {
        return p.id === productId;
      });

      basket.products.push(foundProduct);
      basket.total += foundProduct.price;

      renderBasket();
    })
  );
}

function renderBasket() {
  const basketEl = document.getElementById("basket");

  basketEl.innerHTML = `
    <h2>Basket</h2>
    ${
      basket.total === 0
        ? `
      <p>Basket is empty</p>
    `
        : `
      <ul id="basket-products"></ul>
      <p>Total: <span id="basket-total"></span></p>
    `
    }
  `;

  const basketProductsElement = document.getElementById("basket-products");
  const basketTotalElement = document.getElementById("basket-total");

  basket.products.forEach((product) => {
    basketProductsElement.innerHTML += `
      <li>
        <p>${product.id}</p>
        <img width="80" src="${product.img}" />
        <p>${product.price}</p>
        <button data-product-id="${product.id}" class="btn-basket-delete" onclick="deleteBasketProduct(this)">Delete</button>
      </li>
    `;
  });

  basketTotalElement.innerHTML = `${basket.total}$`;
}

function deleteBasketProduct(btn) {
  const productId = btn.dataset.productId;
  basket.products = basket.products.filter((p) => p.id !== productId);
  basket.total = basket.products.reduce((total, p) => total + p.price, 0);
  renderBasket();
}

generateCatalog();
