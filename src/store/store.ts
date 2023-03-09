import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

import { rtkQuery } from '~/services/rtkQuery/rtkQuery';
import { coreReducer } from '~/store/reducer';

export const store = configureStore({
  reducer: coreReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 256 },
      serializableCheck: {
        warnAfter: 256,
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(rtkQuery.middleware),
});

export const persistor = persistStore(store);
