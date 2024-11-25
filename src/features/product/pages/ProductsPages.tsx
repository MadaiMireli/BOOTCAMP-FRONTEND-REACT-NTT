import { useEffect } from 'react';

import { useAppContext } from '../../../common/hooks/useAppContext';

import { ProductApiResponse, mapperProductResponseToProduct } from '../interfaces';
import CardProduct from "./CardProduct"

const ProductsPages = () => {

  const { state, dispatch } = useAppContext();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {

      const response: ProductApiResponse = await fetch(`${import.meta.env.VITE_BASE_URL}/products`).then(response => response.json());

      dispatch({ type: 'LOAD_PRODUCTS', payload: response.products.map(mapperProductResponseToProduct) })

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="main">
      {
        state.productsFiltered.map(product => (
          <CardProduct key={product.id} data={product} />
        ))
      }
      {
        state.productsFiltered.length === 0 && (
          <h2>No hay productos</h2>
        )
      }
    </main>
  )
}

export default ProductsPages;
