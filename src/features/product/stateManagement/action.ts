import { Product } from "../interfaces";

export type TProductAction = 
    | { type: 'LOAD_PRODUCTS', payload: Product[] }
    | { type: 'FILTERED_PRODUCTS', payload: string }
