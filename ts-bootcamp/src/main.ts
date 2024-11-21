// cada branch solo debe tener el c'odigo que se revisar'a veo que en este branch tambi'en se encuentra js-bootcamp

import './style.css'

import { Cart } from "./entities/cart";
import { Category } from "./entities/category";
import { Product } from "./entities/product";

import { ICategoryOut } from "./interfaces/out/category";
import { IProductOut } from "./interfaces/out/product";

class App {

    product: Product
    category: Category
    cart: Cart

    storedProducts: IProductOut[]
    storedCategories: ICategoryOut[]


    constructor(product: Product, category: Category, cart: Cart) {
        this.product = product;
        this.category = category;
        this.cart = cart;

        this.storedProducts = [];
        this.storedCategories = [];

        this.initEventListeners();
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

    private initEventListeners() {
        const searchInput = document.getElementById("search-input");
        // no est'a mal poner llaves para mejorar la legibilidad, finalmente el c'odigo al ser traspilado, minificado y ofuscado se eliminan o agregan seg'un lo que se configure en el empaquetador 
        if (searchInput) {
          searchInput.addEventListener("keyup", (event) => this.handleSearch(event));
        }

        const categorySelect = document.querySelector(".category-select");
        if (categorySelect)
            categorySelect.addEventListener("change", (event) => this.handleCategoryChange(event));
    }

    private handleSearch(event: KeyboardEvent) {
        const query = (event.target as HTMLInputElement)?.value || "";

        const filteredProducts = this.storedProducts.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );

        this.product.renderProducts(filteredProducts);
    }

    private async handleCategoryChange(event: Event) {
        const selectedCategory = (event.target as HTMLSelectElement)?.value || "";

        const searchInput = document.getElementById("search-input") as HTMLInputElement;
        if (searchInput)
            searchInput.value = "";

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

