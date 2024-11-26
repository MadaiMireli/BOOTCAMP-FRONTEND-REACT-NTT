import { IAppState } from "../../../common/context/AppContext";
import { TCartAction } from "./action";

export const cartReducer = (
  state: IAppState,
  action: TCartAction
): IAppState => {
  switch (action.type) {
    case "ADD_CART": {
      const isProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (isProduct) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }

    case "DECREASE_ITEM": {
      const isProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (isProduct) {
        if (isProduct.quantity === 1) {
          return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload.id),
          };
        }

        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      }

      return state;
    }

    case "INCREASE_ITEM": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }

    case "DELETE_ITEM": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    }

    case "EMPTY_CART": {
      return {
        ...state,
        cart: []
      }
    }
  }
};
