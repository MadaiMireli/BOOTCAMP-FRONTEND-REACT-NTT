import { IProductOut } from "./product";

export interface ICartOut extends IProductOut {
    quantity: number;
}