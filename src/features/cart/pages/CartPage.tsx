import CartResume from "./CartResume"
import FormSend from "./FormSend"

const CartPage = () => {
  return (
    <div className="cart__page" >
      <h2>Resumen de Compra</h2>
      <CartResume/>
      <hr />
      <FormSend/>
    </div>
  )
}
  
export default CartPage
