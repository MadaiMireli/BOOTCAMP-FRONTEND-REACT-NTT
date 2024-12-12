// falta test
import React, { createContext } from 'react';

import { Product, Cart } from '../../features/product/interfaces';
import { TProductAction } from '../../features/product/stateManagement';
import { TCartAction } from '../../features/cart/stateManagement';

export interface IProductState {
    products: Product[]
    productsFiltered: Product[]
}

export interface ICartState {
    cart: Cart[]
}

export type IAppState = IProductState & ICartState;

interface IAppContext {
    state: IAppState,
    dispatch: React.Dispatch<TProductAction | TCartAction>
}

export const AppContext = createContext< IAppContext | undefined >(undefined);
