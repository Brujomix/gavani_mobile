import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const auth_Api = createApi({
  reducerPath: "auth_Api",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_BASE_AUTH_URL}),
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
      transformResponse: (response) =>
        response ? Object.values(response) : [],
    }),
    postImageProfile: builder.mutation({
      query: ({ ...dataProfileImage }) => ({
        url: "profileUsers.json",
        method: "POST",
        body: dataProfileImage,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetImageProfileQuery,
  usePostImageProfileMutation,
} = auth_Api;
