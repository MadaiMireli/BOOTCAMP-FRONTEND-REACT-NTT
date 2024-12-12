// falta test
import "./CartPage.css"

import { CartSummary, Form } from "../components";

const CartPage = () => {
  return (
    <>
      <div className="container">
        <CartSummary />
        <hr />
      </div>
      <div className="container">
        <Form />
      </div>
    </>
  );
};

export default CartPage;
