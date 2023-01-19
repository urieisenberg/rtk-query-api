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
        providesTags: (result, error, album) => {
          const tags = result.map((photo) => ({ type: 'Photo', id: photo.id })); // add tags for each photo
          tags.push({ type: 'AlbumsPhotos', id: album.id }); // add tag for the album's photos
          return tags;
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
        invalidatesTags: (result, error, album) => [
          { type: 'AlbumsPhotos', id: album.id },
        ],
      }),
      deletePhoto: builder.mutation({
        query: (photo) => {
          return {
            url: `/photos/${photo.id}`,
            method: 'DELETE',
          };
        },
        invalidatesTags: (result, error, photo) => [
          { type: 'Photo', id: photo.id },
        ],
      }),
    };
  },
});

export const {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useDeletePhotoMutation,
} = photosApi;
