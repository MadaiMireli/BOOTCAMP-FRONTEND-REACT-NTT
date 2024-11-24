import { useEffect } from 'react';

import { useAppContext } from '../../../common/hooks/useAppContext';

import { ProductApiResponse, mapperProductResponseToProduct } from '../interfaces';
import CardProduct from "./CardProduct"

const ProductsPages = () => {

  const { products, setProducts } = useAppContext();

  // window.onload
  useEffect(() => {

    fetchData();

  }, []);

  const fetchData = async () => {
    try {

      const response: ProductApiResponse = await fetch("https://dummyjson.com/products").then(response => response.json());

      setProducts(response.products.map(mapperProductResponseToProduct));

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="main">
      {
        products.map(product => (
          <CardProduct key={product.id} data={product} />
        ))
      }
    </main>
  )
}

export default ProductsPages;
