import { RootState } from 'src/store/store';

export type RequestStatus = 'loading' | 'success' | 'error' | 'unset';

export interface BaseAsyncThunkOptions<E = ErrorType, S = RootState> {
  rejectValue: E;
  state: S;
}
export interface SystemInfoFields {
  created_at?: string;
  updated_at?: string;
}
export interface ErrorType {
  message?: string
  name?: string
}
