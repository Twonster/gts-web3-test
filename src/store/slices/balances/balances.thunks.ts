import { createAsyncThunk } from '@reduxjs/toolkit';
import { TezosToolkit } from '@taquito/taquito';
import { typedFetchWrapper } from 'src/store/helpers';
import { Balances } from 'src/store/slices/balances/interface';
import { BaseAsyncThunkOptions } from 'src/types/global';

const Tezos = new TezosToolkit(process.env['REACT_APP_API'] ?? '');

export const getBalanceFromPkh = createAsyncThunk<
  Record<string, Balances.BalanceEntity>,
  string,
  BaseAsyncThunkOptions
>('balances/getOne', async (pkh, { rejectWithValue }) => {
  const response = await typedFetchWrapper(() => Tezos.tz.getBalance(pkh));

  if (response.ok) {
    return {
      [pkh]: {
        value: Number(response.data),
        status: 'success',
        updated_at: new Date().toString()
      }
    };
  } else {
    return rejectWithValue({
      name: response.name,
      message: response.message
    });
  }
});
