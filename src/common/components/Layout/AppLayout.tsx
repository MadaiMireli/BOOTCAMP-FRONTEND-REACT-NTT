import { Outlet } from 'react-router';

import { Header, Footer } from "../";
import { AppProvider } from '../../providers/AppProvider';

export const AppLayout = () => {
  return (
    <AppProvider>

        <Header />
        
        <Outlet />

        <Footer />
        
    </AppProvider>
  )
}
