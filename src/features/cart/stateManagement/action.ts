import { Product } from "../../product/interfaces";

export type TCartAction =
  | { type: "ADD_CART"; payload: Product }
  | { type: "DECREASE_ITEM"; payload: Product }
  | { type: "INCREASE_ITEM"; payload: Product }
  | { type: "DELETE_ITEM"; payload: Product }
  | { type: "EMPTY_CART" };
