import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profile_Api = createApi({
  reducerPath: "profile_Api",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_BASE_URL }),
  tagTypes: ["imageProfile"],
  endpoints: (builder) => ({
    getImageProfile: builder.query({
      query: (localId) => {
        return `profileUsers/${localId}.json`;
      },
      providesTags: ["imageProfile"],
    }),

    putImageProfile: builder.mutation({
      query: ({ localId, imageProfile }) => ({
        url: `profileUsers/${localId}.json`,
        method: 'PUT',
        body: {imageProfile}
      }),
      invalidatesTags: ["imageProfile"],
    }),

    deleteImagePorfileByLocalId: builder.mutation({
      query: (localId) => ({
        url: `profileUsers/${localId}.json`,
        method: "DELETE",
      }),
      invalidatesTags: ["imageProfile"],
    }),
  }),
});

export const {
  useGetImageProfileQuery,
  usePutImageProfileMutation,
  useDeleteImagePorfileByLocalIdMutation,
} = profile_Api;
