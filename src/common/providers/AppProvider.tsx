import { ReactNode, useReducer } from 'react';

import { AppContext } from '../context/AppContext';
import { productReducer } from '../stateManage/productReducer';

interface Props {
    children: ReactNode
}
export const AppProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(productReducer, {
      products: [],
      cart: [],
      productsFiltered: [],
    });

    return (
        <AppContext.Provider 
            value={{ state, dispatch }} >
            {children}
        </AppContext.Provider>
    )
}