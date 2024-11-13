import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../firebase/database";

export const orders_Api = createApi({
  reducerPath: "orders_Api",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  tagTypes:["orders"],
  endpoints: (builder) => ({
    postOrder: builder.mutation({
      query: ({ ...order }) => ({
        url: "orders.json",
        method: "POST",
        body: order,
      }),
      invalidatesTags: ["orders"],
    }),
    getOrders: builder.query({
      query: (dateNow) =>
        `orders.json?orderBy="order_date"&equalTo="${dateNow}"`,
      transformResponse: (response) =>
        response
          ? Object.entries(response).map(([key, order]) => ({
              order_key_firebase: key,
              ...order,
            }))
          : [],
          providesTags: ["orders"]
    }),
    getOrderById: builder.query({
      query: (order_iden) =>
        `orders.json?orderBy="order_iden"&equalTo="${order_iden}"`,
      transformResponse: (response) =>
        response
          ? Object.entries(response).map(([key, order]) => ({
              order_key_firebase: key,
              ...order,
            }))
          : [],
    }),
    deleteOrder: builder.mutation({
      query: (order_key) => ({
        url: `orders/${order_key}.json`,
        method: "DELETE",
      }),
      invalidatesTags:["orders"]
    }),
  }),
});

export const {
  usePostOrderMutation,
  useGetOrdersQuery,
  useGetOrderByIdQuery,
  useDeleteOrderMutation,
} = orders_Api;
