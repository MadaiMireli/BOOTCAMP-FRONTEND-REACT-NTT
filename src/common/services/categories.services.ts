import { CategoryResponse, ProductApiResponse } from "../../features/product/interfaces";
import { mapperCategoryResponseToCategory, mapperProductResponseToProduct } from "../../features/product/mappers";

export const getCategories = async () => {
  try {
    const response: CategoryResponse[] = await fetch(
      `${import.meta.env.VITE_BASE_URL}/products/categories`
    ).then((response) => response.json());

    return response.map(mapperCategoryResponseToCategory);
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener las categorías');
  }
};

export const getProductChangeCategory = async (category: string) => {
  let urlToConsult = `${import.meta.env.VITE_BASE_URL
    }/products/category/${category}`;

  try {
    if (!category) {
      urlToConsult = `${import.meta.env.VITE_BASE_URL}/products`;
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