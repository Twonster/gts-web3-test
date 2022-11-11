declare module 'redux-persist/es/persistStore' {
  import { Action, AnyAction, Store } from 'redux';
  import { Persistor, PersistorOptions } from 'redux-persist/es/types';
  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function persistStore<
    S = any,
    A extends Action<any> = AnyAction
  >(
    store: Store<S, A>,
    persistorOptions?: PersistorOptions | null,
    callback?: () => any
  ): Persistor;
}

declare module 'redux-persist/lib/persistStore' {
  export * from 'redux-persist/es/persistStore';
  export { default } from 'redux-persist/es/persistStore';
}
