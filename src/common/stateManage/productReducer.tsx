import { IProductState } from "../context/AppContext";
import { TProductAction } from "./productAction";

export const productReducer = (state: IProductState, action: TProductAction) => {
    switch(action.type) {
        case "LOAD_PRODUCTS": {
            return {
                ...state, 
                products: action.payload,
                productsFiltered: action.payload
            }
        }

        case "FILTERED_PRODUCTS": {
            return {
                ...state,
                productsFiltered: state.products.filter((product) =>
                    product.title.toLowerCase().includes(action.payload.toLowerCase())
                ),
            };
        }

        case "ADD_CART": {
            const isProduct = state.cart.find(item => item.id === action.payload.id);

            if (isProduct) {
                return {
                    ...state,
                    cart: state.cart.map( item => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item )
                }
            }

            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            }
        }

    }
}