import { Product, ProductResponse } from "../interfaces";

export const mapperProductResponseToProduct = (response: ProductResponse): Product => {
    return {
        id: response.id,
        title: response.title,
        category: response.category,
        price: response.price,
        image: response.images[0],
    };
}
