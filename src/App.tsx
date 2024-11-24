import { Header, Footer } from './common/components';

import { AppProvider } from './common/providers/AppProvider';

import ProductsPages from './features/product/pages/ProductsPages';

const App = () => {

  return (
    <AppProvider>
      <Header />
      <ProductsPages />
      <Footer />
    </AppProvider>

  );
}

export default App;
