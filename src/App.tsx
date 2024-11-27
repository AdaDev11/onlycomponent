import React from 'react';
import { MantineProvider } from '@mantine/core';
import HeaderSearch from './components/HeaderSearch/HeaderSearch.tsx';
import FooterSimple from './components/Footer/footer.tsx';
import FaqSimple from './components/FaqSimple/FaqSimple.tsx';

const App: React.FC = () => {
  return (
    <MantineProvider >
      <HeaderSearch />
      <FaqSimple />
      <FooterSimple />
    </MantineProvider>
  );
};

export default App;
