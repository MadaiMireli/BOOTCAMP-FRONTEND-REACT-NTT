import "./ProductsPages.css";

import { useEffect } from "react";

import { useAppContext } from "../../../common/hooks/useAppContext";

import { NUM_PRODUCT_BY_PAGE } from "@/global";
import { CardProduct, Pagination } from "../components";
import { usePagination } from "../hooks";
import { getProducts } from "../services";

const ProductsPages = () => {
  const { state, dispatch } = useAppContext();

  const { currentPage, handlePageChange } = usePagination(1);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const skip = (currentPage - 1) * NUM_PRODUCT_BY_PAGE;
      const response = await getProducts(NUM_PRODUCT_BY_PAGE, skip);

      dispatch({
        type: "LOAD_PRODUCTS",
        payload: response,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {state.productsFiltered.length > 0 ? (
        <>
          <main className="main">
            {state.productsFiltered.map((product) => (
              <CardProduct key={product.id} data={product} />
            ))}
          </main>
          <div className="pagination-container">
            <Pagination
              currentPage={currentPage}
              totalItems={190}
              itemsPerPage={NUM_PRODUCT_BY_PAGE}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      ) : (
        <h2>No hay productos</h2>
      )}
    </>
  );
};

export default ProductsPages;
