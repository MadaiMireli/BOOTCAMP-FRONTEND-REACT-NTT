import { useEffect } from "react";

import { useAppContext } from "../../../common/hooks/useAppContext";

import {
  ProductApiResponse,
  mapperProductResponseToProduct,
} from "../interfaces";
import { CardProduct } from "../components";

const ProductsPages = () => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    // el componente products pages solo deber'ia renderizar los productos y leer la información del servicio no deber'ia tener l'ogica de llamada esa responsabilidad debe estar en otro archivo
    try {
      const response: ProductApiResponse = await fetch(
        `${import.meta.env.VITE_BASE_URL}/products`
      ).then((response) => response.json());

      dispatch({
        type: "LOAD_PRODUCTS",
        payload: response.products.map(mapperProductResponseToProduct),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="main">
      {state.productsFiltered.length > 0 ? (
        state.productsFiltered.map((product) => (
          <CardProduct key={product.id} data={product} />
        ))
      ) : (
        <h2>No hay productos</h2>
      )}
    </main>
  );
};

export default ProductsPages;
