import { FC } from "react";
import { Cart } from "../../../product/interfaces";
import { useAppContext } from "../../../../common/hooks/useAppContext";

interface ItemCartProp {
  item: Cart;
}
export const ItemCart: FC<ItemCartProp> = ({ item }) => {

    const { dispatch } = useAppContext();

    const handleDecreaseItem = () => {
        dispatch({ type:'DECREASE_ITEM', payload: item })
    }
    
    const handleIncreaseItem = () => {
        dispatch({ type:'INCREASE_ITEM', payload: item })
    }
    
    const handleDeleteItem = () => {
        dispatch({ type:'DELETE_ITEM', payload: item })
    }

  return (
    <tr>
      <td>
        <img src={item.image} alt={item.title} className="product__item--img" />
      </td>
      <td>{item.title}</td>
      <td>{item.price}</td>
      <td>
        <div className="quantity__control">
          <button className="quantity__btn" onClick={handleDecreaseItem}>-</button>
          <input
            type="text"
            value={item.quantity}
            readOnly
            className="quantity__input"
          />
          <button className="quantity__btn" onClick={handleIncreaseItem}>+</button>
        </div>
      </td>
      <td>
        <button className="delete__btn" onClick={handleDeleteItem}>Eliminar</button>
      </td>
    </tr>
  );
};
