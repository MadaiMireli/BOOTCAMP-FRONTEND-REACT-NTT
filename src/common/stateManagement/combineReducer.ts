import { TCartAction } from "../../features/cart/stateManagement/action";
import { TProductAction } from "../../features/product/stateManagement/action";
import { IAppState } from "../context/AppContext";

export const combineReducers = (
  productReducer: (state: IAppState, action: TProductAction) => IAppState,
  cartReducer: (state: IAppState, action: TCartAction) => IAppState
) => {
  return (state: IAppState, action: TProductAction | TCartAction): IAppState => {

    return {
      ...state,
      ...productReducer(state, action as TProductAction),
      ...cartReducer(state, action as TCartAction)
    }
  };
};
