import { ProductResponse } from './';

export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
}

// no hay que mezclar interfaces con mappers

export const mapperProductResponseToProduct = (response: ProductResponse): Product => {
    return {
        id: response.id,
        title: response.title,
        category: response.category,
        price: response.price,
        image: response.images[0],
    };
}
