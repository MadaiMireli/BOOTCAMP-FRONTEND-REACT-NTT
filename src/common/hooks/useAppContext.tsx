import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const useAppContext = () => {
    
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('error al cargar el custom hook de context');
    }

    return context;

}
