import { ICartOut } from "../interfaces/out/cart";
import { IProductOut } from "../interfaces/out/product";

export class Cart {
  cart: ICartOut[];

  constructor() {
    this.cart = [];
    this.loadCartFromLocalStorage();
  }

  private saveCartToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem("cart");
    this.cart = storedCart ? JSON.parse(storedCart) : [];
    this.updateCartCount();
  }

  addToCart(product: IProductOut) {
    const isProductInCart = this.cart.find((item) => item.id === product.id);

    if (isProductInCart) {
      isProductInCart.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }

    this.updateCartCount();
    this.saveCartToLocalStorage();
  }

  updateCartCount() {
    const cartCount = document.querySelector(".cart-count");

    if (cartCount) {
      cartCount.textContent = String(
        this.cart.reduce((total, item) => total + item.quantity, 0)
      );
    }
  }
}
