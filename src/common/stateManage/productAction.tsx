import { Product } from "../../features/product/interfaces";

export type TProductAction = 
    | { type: 'LOAD_PRODUCTS', payload: Product[] }
    | { type: 'ADD_CART', payload: Product }
    | { type: 'FILTERED_PRODUCTS', payload: string }
