import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const auth_Api = createApi({
  reducerPath: "auth_Api",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_BASE_AUTH_URL }),
  tagTypes: ["imageProfile"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ ...user }) => ({
        url: `accounts:signInWithPassword?key=${process.env.EXPO_PUBLIC_KEY_API}`,
        method: "POST",
        body: user,
      }),
    }),
    register: builder.mutation({
      query: ({ ...user }) => ({
        url: `accounts:signUp?key=${process.env.EXPO_PUBLIC_KEY_API}`,
        method: "POST",
        body: user,
      }),
    }),
    getImageProfile: builder.query({
      query: (localID) => {
        return `profileUsers/${localID}.json`;
      },
      providesTags: ["imageProfile"],
    }),

    putImageProfile: builder.mutation({
      query: ({ ...dataProfileImage }) => ({
        url: `profileUsers/${dataProfileImage.localID}.json`,
        method: "PUT",
        body: { imageProfile: dataProfileImage.imageProfile },
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
  useLoginMutation,
  useRegisterMutation,
  useGetImageProfileQuery,
  usePutImageProfileMutation,
  useDeleteImagePorfileByLocalIdMutation,
} = auth_Api;
