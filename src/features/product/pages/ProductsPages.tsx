import "./ProductsPages.css"

import { useEffect } from "react";

import { useAppContext } from "../../../common/hooks/useAppContext";

import { CardProduct } from "../components";
import { getProducts } from "../services/product.services";

const ProductsPages = () => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    try {
      const response = await getProducts();

      dispatch({
        type: "LOAD_PRODUCTS",
        payload: response,
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
