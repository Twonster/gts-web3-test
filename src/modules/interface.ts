import { Balances } from 'src/store/slices/balances/interface';

export interface BalanceListItemProps
  extends Balances.BalanceEntity,
    Record<'pkh', string> {}
