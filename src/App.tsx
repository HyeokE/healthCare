import React from 'react';
import { LayoutContainer } from './styles/layouts';
import Table from './components/common/Table';
import SelectBox from './components/common/SelectBox';

function App() {
  return (
    <LayoutContainer>
      <div style={{ height: '100px' }} />
      <SelectBox />
      <Table />
    </LayoutContainer>
  );
}

export default App;
