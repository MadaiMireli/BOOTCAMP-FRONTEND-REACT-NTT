import { ProductResponse } from './';

export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
}

export const mapperProductResponseToProduct = (response: ProductResponse): Product => {
    return {
        id: response.id,
        title: response.title,
        category: response.category,
        price: response.price,
        image: response.images[0],
    };
}
