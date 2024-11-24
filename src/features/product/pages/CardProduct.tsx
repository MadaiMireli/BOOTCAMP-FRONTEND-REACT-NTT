import type { FC } from 'react';
import type { Product } from '../interfaces';

interface Props {
  data: Product
}

const CardProduct: FC<Props> = ({ data }) => {
  return (
    <div className="productCard">
      <img src={data.image} alt={data.title} className="productCard__image" />
      <h3>{data.title}</h3>
      <p>Categoría: {data.category}</p>
      <p>Precio: s/. {data.price}</p>
      <button className="productCard__button">Agregar al Carrito</button>
    </div>
  )
}

export default CardProduct
