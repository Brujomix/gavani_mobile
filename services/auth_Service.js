import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const auth_Api = createApi({
  reducerPath: "auth_Api",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_BASE_AUTH_URL }),
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
  }),
});

export const { useLoginMutation, useRegisterMutation } = auth_Api;
