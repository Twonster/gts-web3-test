import { ReactElement, useMemo } from 'react';
import { BalanceListItem } from 'src/modules/balance/components/balance-list-item/balance-list-item.component';
import { useAppSelector } from 'src/store/store';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BalanceListSection = (): ReactElement => {
  const entities = useAppSelector((store) => store.balances.entities);

  const MemoizedSortedList = useMemo(
    () =>
      Object.entries(entities)
        .sort(
          ([, a], [, b]) =>
            new Date(b.created_at || Date.now())?.getTime() -
            new Date(a.created_at || Date.now())?.getTime()
        )
        .map(([pkh, entity]) => (
          <BalanceListItem {...entity} pkh={pkh} key={pkh} />
        )),
    [entities]
  );

  return <Container>{MemoizedSortedList}</Container>;
};
