import { ProductApiResponse } from "../interfaces";
import { mapperProductResponseToProduct } from "../mappers";
  
  export const getProducts = async () => {
    try {
      const response: ProductApiResponse = await fetch(
        `${import.meta.env.VITE_BASE_URL}/products`
      ).then((response) => response.json());

      return response.products.map(mapperProductResponseToProduct);

    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener los productos');
    }
  };