import { rtkQuery } from '~/services/rtkQuery/rtkQuery';
import { GetPostsResponse, GetPostsRequest } from './types';

export const postApi = rtkQuery.injectEndpoints({
  overrideExisting: true,
  endpoints: builder => ({
    getPosts: builder.query<GetPostsResponse, GetPostsRequest>({
      query: () => ({
        url: `/posts`,
      }),
    }),
  }),
});

export const { useGetPostsQuery } = postApi;
