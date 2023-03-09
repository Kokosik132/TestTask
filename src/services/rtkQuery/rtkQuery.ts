import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { tags } from './utils/cache';

export const rtkQuery = createApi({
  reducerPath: 'rtkReducer',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  tagTypes: Object.values(tags), 
  endpoints: () => ({}),
});
