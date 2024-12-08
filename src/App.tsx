import { RouterProvider, createBrowserRouter } from 'react-router';

import { AppLayout } from './common/components';
import { ProductsPage } from './features/product/pages';
import { CartPage } from './features/cart/pages';
import { LoginPage } from './features/auth/pages';
import { RoutePages } from './common/routes';
import { withAuth } from './common/hoc';

const ProtectedProductsPage = withAuth(ProductsPage);
const ProtectedCartPage = withAuth(CartPage);

const router = createBrowserRouter([
  {
    path: RoutePages.Init,
    element: <AppLayout />,
    children: [
      {
        path: RoutePages.Init,
        element: <ProtectedProductsPage />
      },
      {
        path: RoutePages.Cart,
        element: <ProtectedCartPage />
      }
    ]
  },
  {
    path: RoutePages.Auth,
    element: <LoginPage />
  }
])

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;
