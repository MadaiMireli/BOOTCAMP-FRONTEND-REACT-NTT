import { Cart } from './cart.js'
import { Category } from './categories.js'
import { Product } from './products.js'

class App {
  constructor(product, category, cart) {
      this.product = product;
      this.category = category;
      this.cart = cart;

      this.storedProducts = [];
      this.storedCategories = [];

      this.#initEventListeners();
  }

  async init() {
      const [ 
          promiseProducts, 
          promiseCategories 
      ] = await Promise.all([ 
          this.product.fetchProducts(), 
          this.category.fetchCategories() 
      ]);

      this.storedProducts = promiseProducts;
      this.storedCategories = promiseCategories;

      this.product.renderProducts(this.storedProducts);
      this.category.renderCategories(this.storedCategories);
  }

  #initEventListeners() {
      const searchInput = document.getElementById("search-input");
      searchInput.addEventListener("keyup", (event) => this.#handleSearch(event));

      const categorySelect = document.querySelector(".category-select");
      categorySelect.addEventListener("change", (event) => this.#handleCategoryChange(event));
  }

  #handleSearch(event) {
      const query = event.target.value;
      
      const filteredProducts = this.storedProducts.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
      );

      this.product.renderProducts(filteredProducts);
  }

  async #handleCategoryChange(event) {
      const selectedCategory = event.target.value;

      if (!selectedCategory) {
          const products = await this.product.fetchProducts();
          this.storedProducts = products;
      } else {
          const products = await this.product.fetchProductsByCategory(selectedCategory);
          this.storedProducts = products;
      }

      this.product.renderProducts(this.storedProducts);
  }
}

window.onload = () => {

  const cart = new Cart();
  const category = new Category();
  const product = new Product(cart);

  const app = new App(product, category, cart);
  app.init();

}
