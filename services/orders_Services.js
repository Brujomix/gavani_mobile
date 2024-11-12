import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../firebase/database";
import { formated_Date } from "../utils/formated_Date";

export const orders_Api = createApi({
  reducerPath: "orders_Api",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    postOrder: builder.mutation({
      query: ({ ...order }) => ({
        url: "orders.json",
        method: "POST",
        body: order,
      }),
    }),
    getOrders: builder.query({
      query: (dateNow) => `orders.json?orderBy="order_date"&equalTo="${dateNow}"`,
      transformResponse: (response) =>
        response ? Object.values(response) : [],
    }),
    getOrderById: builder.query({
      query: (order_iden) => `orders.json?orderBy="order_iden"&equalTo="${order_iden}"`,
      transformResponse: (response) =>
        response ? Object.values(response) : [],
    }),
  }),
});

export const { usePostOrderMutation, useGetOrdersQuery, useGetOrderByIdQuery } = orders_Api;
