import React from 'react';
import { ContainerInner, LayoutContainer } from './styles/layouts';
import Table from './components/common/Table';
import API from './apis';

function App() {
  return (
    <LayoutContainer>
        <ContainerInner>
        <Table />

        </ContainerInner>
    </LayoutContainer>
  );
}

export default App;
