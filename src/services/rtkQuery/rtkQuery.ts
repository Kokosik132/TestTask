import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '~/constants';
import { tags } from './utils/cache';

export const rtkQuery = createApi({
  reducerPath: 'rtkReducer',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: Object.values(tags),
  endpoints: () => ({}),
});
