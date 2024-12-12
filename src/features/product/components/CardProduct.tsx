// falta test
import "./CardProduct.css"

import type { FC } from 'react';
import type { Product } from '../interfaces';
import { useAppContext } from '../../../common/hooks/useAppContext';

interface Props {
  data: Product
}

export const CardProduct: FC<Props> = ({ data }) => {

  const { dispatch } = useAppContext();

  const addToCart = () => {
    dispatch({ type: 'ADD_CART', payload: data });
  }

  return (
    <div className="productCard">
      <img src={data.image} alt={data.title} className="productCard__image" />
      <h3>{data.title}</h3>
      <p>Categoría: {data.category}</p>
      <p>Precio: s/. {data.price}</p>
      <button onClick={addToCart} className="productCard__button">Agregar al Carrito</button>
    </div>
  )
}
