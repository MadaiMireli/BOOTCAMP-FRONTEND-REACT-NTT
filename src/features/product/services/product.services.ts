// falta test
import { CategoryResponse, ProductApiResponse } from "../interfaces";
import { mapperCategoryResponseToCategory, mapperProductResponseToProduct } from "../mappers";
import {BASE_URL} from "../../../global";

  export const getProducts = async () => {
    try {
      const response: ProductApiResponse = await fetch(
        `${BASE_URL}/products`
      ).then((response) => response.json());

      return response.products.map(mapperProductResponseToProduct);

    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener los productos');
    }
  };

  export const getCategories = async () => {
    try {
      const response: CategoryResponse[] = await fetch(
        `${BASE_URL}/products/categories`
      ).then((response) => response.json());
  
      return response.map(mapperCategoryResponseToCategory);
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener las categorías');
    }
  };
  
  export const getProductChangeCategory = async (category: string) => {
    let urlToConsult = `${BASE_URL
      }/products/category/${category}`;
  
    try {
      if (!category) {
        urlToConsult = `${BASE_URL}/products`;
      }
      const response: ProductApiResponse = await fetch(urlToConsult).then(
        (response) => response.json()
      );
  
      return response.products.map(mapperProductResponseToProduct);
  
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener productos al cambiar categorías');
    }
  };