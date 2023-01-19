import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { faker } from '@faker-js/faker';

export const photosApi = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
  }),
  endpoints(builder) {
    return {
      fetchPhotos: builder.query({
        query: (album) => {
          return {
            url: '/photos',
            params: { albumId: album.id },
            method: 'GET',
          };
        },
      }),
      addPhoto: builder.mutation({
        query: (album) => {
          return {
            url: '/photos',
            method: 'POST',
            body: {
              albumId: album.id,
              title: faker.image.abstract(150, 150, true), // 150x150 image with a random title (true)
            },
          };
        },
      }),
      deletePhoto: builder.mutation({
        query: (photo) => {
          return {
            url: `/photos/${photo.id}`,
            method: 'DELETE',
          };
        },
      }),
    };
  },
});

