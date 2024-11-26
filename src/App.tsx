import React from 'react';
import { MantineProvider } from '@mantine/core';
import HeaderSearch from './components/HeaderSearch/HeaderSearch.tsx';
import FooterSimple from './components/Footer/footer.tsx';
import Products from './components/Products/product.tsx';
import FaqSimple from './components/FaqSimple/FaqSimple.tsx';

const App: React.FC = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <HeaderSearch />
      <Products />
      <FaqSimple />
      <FooterSimple />
    </MantineProvider>
  );
};

export default App;
