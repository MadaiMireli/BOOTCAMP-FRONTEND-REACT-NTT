import { ReactNode, useReducer } from 'react';

import { AppContext, IAppState } from '../context/AppContext';
import { combineReducers } from '../stateManagement/combineReducer';
import { productReducer } from '../../features/product/stateManagement';
import { cartReducer } from '../../features/cart/stateManagement';

interface Props {
    children: ReactNode
}

const rootReducer = combineReducers(productReducer, cartReducer);

export const AppProvider = ({ children }: Props) => {

    // esto deber'ia estar fuera para evitar redefinirse
    const initialState: IAppState = {
        products: [],
        cart: [],
        productsFiltered: [],
    }

    const [ state, dispatch ] = useReducer(rootReducer, initialState);

    return (
        <AppContext.Provider 
            value={{ state, dispatch }} >
            {children}
        </AppContext.Provider>
    )
}