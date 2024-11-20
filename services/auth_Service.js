import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const auth_Api = createApi({
  reducerPath: "auth_Api",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_BASE_AUTH_URL }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ ...user }) => ({
        url: `accounts:signInWithPassword?key=${process.env.EXPO_PUBLIC_KEY_API}`,
        method: "POST",
        body: { ...user, returnSecureToken: true },
      }),
    }),
    register: builder.mutation({
      query: ({ ...user }) => ({
        url: `accounts:signUp?key=${process.env.EXPO_PUBLIC_KEY_API}`,
        method: "POST",
        body: user,
      }),
    }),
    deleteAccount: builder.mutation({
      query: (idToken) => ({
        url: `accounts:delete?key=${process.env.EXPO_PUBLIC_KEY_API}`,
        method: "POST",
        body: idToken,
      }),
    }),
    refreshToken: builder.mutation({
      query: (refreshToken) => ({
        url: `${process.env.EXPO_PUBLIC_BASE_TOKEN_URL}token?key=${process.env.EXPO_PUBLIC_KEY_API}`,
        method: "POST",
        body: {
          grant_type: "refresh_token",
          refresh_token: refreshToken,
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useDeleteAccountMutation, useRefreshTokenMutation } =
  auth_Api;
