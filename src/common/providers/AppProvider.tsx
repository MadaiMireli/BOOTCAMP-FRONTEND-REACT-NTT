import { ReactNode, useState } from 'react';

import { AppContext } from '../context/AppContext';
import { Product } from '../../features/product/interfaces';

interface Props {
    children: ReactNode
}
export const AppProvider = ({ children }: Props) => {

    const [ products, setProducts ] = useState<Product[]>([]);
    const [ cart, setCart ] = useState<string[]>([]);
    const [ loading, setLoading ] = useState<boolean>(false);

    const onLoadProducts = (products: Product[]) => {
        setLoading(false);
        setProducts(products)
        setLoading(true);
    }

    return (
        <AppContext.Provider value={{ loading, products, cart, setProducts: onLoadProducts }} >
            {children}
        </AppContext.Provider>
    )
}