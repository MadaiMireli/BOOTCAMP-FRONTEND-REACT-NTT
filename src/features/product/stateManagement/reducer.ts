import { IAppState } from "../../../common/context/AppContext";
import { TProductAction } from "./action";

export const productReducer = (state: IAppState, action: TProductAction): IAppState => {
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

    }
}