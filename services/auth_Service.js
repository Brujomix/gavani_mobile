import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseAuthURL, key_Api } from "../firebase/database";

export const auth_Api = createApi({
  reducerPath: "auth_Api",
  baseQuery: fetchBaseQuery({ baseUrl: baseAuthURL }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ ...user }) => ({
        url: `accounts:signInWithPassword?key=${key_Api}`,
        method: "POST",
        body: user,
      }),
    }),
    register: builder.mutation({
      query: ({ ...user }) => ({
        url: `accounts:signUp?key=${key_Api}`,
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = auth_Api;
