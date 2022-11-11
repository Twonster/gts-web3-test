import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getBalanceFromPkh } from 'src/store/slices/balances/balances.thunks';
import { Balances } from 'src/store/slices/balances/interface';

const initialState: Balances.BalancesSlice = {
  status: 'unset',
  entities: {}
};
export const balancesSlice = createSlice({
  initialState,
  name: 'balances',
  reducers: {
    removePkh: (state, { payload }: PayloadAction<string>) => {
      delete state.entities[payload];
    },
    addPkh: (state, { payload }: PayloadAction<string>) => {
      state.entities[payload] = {
        status: 'unset',
        created_at: new Date().toString()
      };
    }
  },
  extraReducers: ({ addCase }) => {
    addCase(getBalanceFromPkh.pending, (state, { meta }) => {
      const pkh = meta.arg;

      state.entities[pkh] = {
        ...state.entities[pkh],
        status: 'loading'
      };
    });
    addCase(getBalanceFromPkh.fulfilled, (state, { payload, meta }) => {
      const pkh = meta.arg;

      state.entities[pkh] = {
        ...state.entities[pkh],
        ...payload[pkh]
      };
      delete state.entities[pkh].error;
    });
    addCase(getBalanceFromPkh.rejected, (state, { payload, meta }) => {
      const pkh = meta.arg;

      if (pkh in state.entities) {
        state.entities[pkh] = {
          ...state.entities[pkh],
          status: 'error',
          error: payload
        };
      } else {
        state.entities[pkh] = {
          status: 'error',
          error: payload,
          created_at: new Date().toString(),
          updated_at: new Date().toString()
        };
      }
    });
  }
});
