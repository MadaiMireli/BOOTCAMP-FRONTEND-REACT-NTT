export class Cart {
  constructor() {
    this.cart = [];
    this.loadCartFromLocalStorage();
  }

  #saveCartToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem("cart");
    this.cart = storedCart ? JSON.parse(storedCart) : [];
    this.updateCartCount();
  }

  addToCart(product) {
    const isProductInCart = this.cart.find((item) => item.id === product.id);

    if (isProductInCart) {
      isProductInCart.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }

    this.updateCartCount();
    this.#saveCartToLocalStorage();
  }

  updateCartCount() {
    const cartCount = document.querySelector(".cart-count");

    if (cartCount) {
      cartCount.textContent = this.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
    }
  }

}
