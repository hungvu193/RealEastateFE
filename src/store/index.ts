import { configureStore, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer, { RootState } from './reducers';
import storage from 'redux-persist/lib/storage';

const persitConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer'],
};

const persistedReducer = persistReducer<RootState>(persitConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(logger),
  ],
});

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

// eslint-disable-next-line no-undef
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default { store, persistor };
