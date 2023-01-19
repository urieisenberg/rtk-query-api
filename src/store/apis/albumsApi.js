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
        invalidatesTags: (result, error, user) => [
          { type: 'UsersAlbums', id: user.id },
        ],
      }),
      deleteAlbum: builder.mutation({
        query: (album) => {
          return {
            url: `/albums/${album.id}`,
            method: 'DELETE',
          };
        },
        invalidatesTags: (result, error, album) => [
          { type: 'Album', id: album.id },
        ],
      }),
      fetchAlbums: builder.query({
        query: (user) => {
          return {
            url: '/albums',
            params: { userId: user.id },
            method: 'GET',
          };
        },
        providesTags: (result, error, user) => {
          const tags = result.map((album) => ({ type: 'Album', id: album.id })); // add tags for each album
          tags.push({ type: 'UsersAlbums', id: user.id }); // add tag for the user's albums
          return tags;
        },
      }),
    };
  },
});

export const {
  useFetchAlbumsQuery,
  useAddAlubmMutation,
  useDeleteAlbumMutation,
} = albumsApi;
