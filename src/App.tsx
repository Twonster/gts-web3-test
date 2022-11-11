import React, { ReactElement } from 'react';
import { BalanceModule } from 'src/modules/balance/balance.module';
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme } from './appTheme';
import GlobalStyles from './GlobalStyles';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

const App = (): ReactElement => {
  return (
    <Container>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <BalanceModule />
      </ThemeProvider>
    </Container>
  );
};

export default App;
