import { useAppContext } from "../../../../common/hooks/useAppContext";
import { roundToTwoDecimals } from "../../utils";
import { ItemCart } from "../ItemCart";
import "./CartResume.css";

export const CartSummary = () => {
  const { state } = useAppContext();

  const totalPrice = state.cart.reduce(
    (acc, current) => acc + current.quantity * current.price,
    0.0
  );

  return (
    <>
      <table className="cart__table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((item) => (
            <ItemCart key={item.id} item={item} />
          ))}
        </tbody>
      </table>
      <div className="total">
        Total a pagar: S/. {roundToTwoDecimals(totalPrice)}
      </div>
    </>
  );
};
