import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const auth_Api = createApi({
  reducerPath: "auth_Api",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_BASE_AUTH_URL }),
  tagTypes:["imageProfile"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ ...user }) => ({
        url: `accounts:signInWithPassword?key=${process.env.EXPO_PUBLIC_KEY_APi}`,
        method: "POST",
        body: user,
      }),
    }),
    register: builder.mutation({
      query: ({ ...user }) => ({
        url: `accounts:signUp?key=${process.env.EXPO_PUBLIC_KEY_APi}`,
        method: "POST",
        body: user,
      }),
    }),
    getImageProfile: builder.query({
      query: (localID) => {
        return `profileUsers.json?orderBy="localID"&equalTo=${localID}`;
      },
      providesTags:["imageProfile"],
      transformResponse: (response) =>
        response
          ? Object.entries(response).map(([key, profileImage]) => ({
              imageProfile_key_firebase: key,
              ...profileImage,
            }))
          : [],
    }),

    postImageProfile: builder.mutation({
      query: ({ ...dataProfileImage }) => ({
        url: "profileUsers.json",
        method: "POST",
        body: dataProfileImage,
      }),
      invalidatesTags:["imageProfile"]
    }),

    deleteImagePorfileByLocalId: builder.mutation({
      query: (imageProfile_key) => ({
        url: `profileUsers/${imageProfile_key}.json`,
        method: "DELETE",
      }),
      invalidatesTags:["imageProfile"]
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetImageProfileQuery,
  usePostImageProfileMutation,
  useDeleteImagePorfileByLocalIdMutation
} = auth_Api;
