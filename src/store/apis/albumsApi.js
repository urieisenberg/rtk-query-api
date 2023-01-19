import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

export const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
  }),
  endpoints(builder) {
    return {
      addAlubm: builder.mutation({
        query: (user) => {
          return {
            url: '/albums',
            method: 'POST',
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        },
      }),
      fetchAlbums: builder.query({
        query: (user) => {
          return {
            url: '/albums',
            params: { userId: user.id },
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useFetchAlbumsQuery } = albumsApi;
