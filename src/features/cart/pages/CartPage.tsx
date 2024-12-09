import "./CartPage.css"

import { CartSummary, Form } from "../components";

const CartPage = () => {
  return (
    <>
      <div className="container__cart">
        <CartSummary />
        <hr />
      </div>
      <div className="container__cart">
        <Form />
      </div>
    </>
  );
};

export default CartPage;
