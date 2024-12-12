// falta test
import { RouterProvider, createBrowserRouter } from 'react-router';
import { AppLayout } from './common/components';

import { ProductsPage } from './features/product/pages';
import { CartPage } from './features/cart/pages';

const router = createBrowserRouter([
  {
    path: '',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <ProductsPage />
      },
      {
        path: 'cart',
        element: <CartPage />
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;
