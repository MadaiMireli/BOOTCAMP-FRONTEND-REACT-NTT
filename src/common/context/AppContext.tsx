import React, { createContext } from 'react';
import { Product, Cart } from '../../features/product/interfaces';
import { TProductAction } from '../stateManage/productAction';

export interface IProductState {
    products: Product[]
    cart: Cart[]

    productsFiltered: Product[]
}

interface IAppContext {
    state: IProductState,
    dispatch: React.Dispatch<TProductAction>
}

export const AppContext = createContext< IAppContext | undefined >(undefined);


