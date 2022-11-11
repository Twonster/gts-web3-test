import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist';
import { balancesSlice } from 'src/store/slices/balances/balances.slice';

const reducers = combineReducers({
  [balancesSlice.name]: balancesSlice.reducer
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
