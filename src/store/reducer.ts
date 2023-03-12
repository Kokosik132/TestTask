import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { rtkQuery } from '~/services/rtkQuery';
import { uiReducer } from './modules';

const uiPersisted = persistReducer(
  {
    key: 'ui',
    version: 1,
    storage: AsyncStorage,
    whitelist: ['buttons'],
  },
  uiReducer
);

export const coreReducer = combineReducers({
  ui: uiPersisted,
  [rtkQuery.reducerPath]: rtkQuery.reducer,
});
