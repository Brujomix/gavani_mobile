import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../firebase/database";

export const tickets_Api = createApi({
  reducerPath: "tickets_Api",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    postTickets: builder.mutation({
      query: ({ ...ticket }) => ({
        url: "tickets.json",
        method: "POST",
        body: { ticket },
      }),
    }),
  }),
});

export const { usePostTicketsMutation } = tickets_Api;
