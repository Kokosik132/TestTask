import { PayloadAction } from '@reduxjs/toolkit';

import { coreReducer, store } from '~/store';

export type Store = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof coreReducer>;
export type SlicePayloadAction<P, T> = PayloadAction<P, string, { arg: { originalArgs: T } }>;
