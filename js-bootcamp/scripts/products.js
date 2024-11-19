export class Product {
  constructor(cart) {
      this.cart = cart;
  }

  async fetchProducts() {
      try {
          const { products } = await fetch("https://dummyjson.com/products").then(response => response.json());
          return products.map(this.#mapperProducts);
      } catch (error) {
          console.error(error);
      }
  }

  async fetchProductsByCategory(category) {
      try {
          const { products } = await fetch(`https://dummyjson.com/products/category/${category}`).then(response => response.json());
          return products.map(this.#mapperProducts);
      } catch (error) {
          console.error(error);
      }
  }

  renderProducts(products) {
      const containerRender = document.querySelector(".render-products");
      containerRender.replaceChildren();

      products.forEach((product) => {
          const section = this.#addDynamicContentProduct(product);
          containerRender.appendChild(section);
      });
  }

  #addDynamicContentProduct(product) {
      const productSection = document.createElement("div");
      productSection.classList.add("product");

      const banner = document.createElement("img");
      banner.src = product.image;
      banner.alt = product.title;

      const title = document.createElement("h3");
      title.textContent = product.title;

      const category = document.createElement("p");
      category.textContent = `Categoría: ${product.category}`;

      const price = document.createElement("p");
      price.textContent = `Precio: s/. ${product.price}`;

      const buttonAddToCart = document.createElement("button");
      buttonAddToCart.textContent = "Agregar al carrito";
      buttonAddToCart.addEventListener('click', () => this.cart.addToCart(product));

      productSection.appendChild(banner);
      productSection.appendChild(title);
      productSection.appendChild(category);
      productSection.appendChild(price);
      productSection.appendChild(buttonAddToCart);

      return productSection;
  }

  #mapperProducts(product) {
    return {
      id: product.id,
      title: product.title,
      category: product.category,
      price: product.price,
      image: product.images[0]
    }
  }
}
