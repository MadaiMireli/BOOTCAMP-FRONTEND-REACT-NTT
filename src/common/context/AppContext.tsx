import { createContext } from 'react';
import { Product } from '../../features/product/interfaces';

interface IAppContext {
    products: Product[]
    loading: boolean
    cart: string[]

    setProducts: (products: Product[]) => void
}

export const AppContext = createContext< IAppContext | undefined >(undefined);

