import { ErrorType, RequestStatus, SystemInfoFields } from 'src/types/global';

export namespace Balances {
  export interface BalancesSlice {
    status: RequestStatus;
    entities: Record<string, BalanceEntity>;
  }

  export interface BalanceEntity extends SystemInfoFields {
    status?: RequestStatus;
    value?: number;
    error?: ErrorType | null;
  }
}
