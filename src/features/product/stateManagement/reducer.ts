import { IAppState } from "../../../common/context/AppContext";
import { TProductAction } from "./action";

export const productReducer = (state: IAppState, action: TProductAction): IAppState => {
    switch (action.type) {
      case "LOAD_PRODUCTS": {
        return {
          ...state,
          products: action.payload,
          productsFiltered: action.payload,
        };
      }
  
      case "FILTERED_PRODUCTS": {
        const query = action.payload.trim().toLowerCase();

        if (!query) {
          return {
            ...state,
            productsFiltered: state.products,
          };
        }
  
        return {
          ...state,
          productsFiltered: state.products.filter((product) =>
            product.title.toLowerCase().includes(query)
          ),
        };
      }
  
      default:
        return state;
    }
  };
  