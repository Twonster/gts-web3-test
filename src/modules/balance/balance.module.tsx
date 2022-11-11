import { ReactElement } from 'react';
import { BalanceInputSection } from 'src/modules/balance/sections/balance-input.section';
import { BalanceListSection } from 'src/modules/balance/sections/balance-list.section';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 900px;
  margin: auto;
  width: 100%;
  height: 100%;
`;

export const BalanceModule = (): ReactElement => {
  return (
    <Container>
      <BalanceInputSection />
      <BalanceListSection />
    </Container>
  );
};
