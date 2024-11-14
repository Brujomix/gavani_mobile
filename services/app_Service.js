import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../firebase/database";

export const app_Api = createApi({
  reducerPath: "app_Api",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "categories.json",
    }),
    getProductsByCategory: builder.query({
      query: (cat_iden) => {
        return `products.json?orderBy="pro_cat_iden"&equalTo=${cat_iden}`;
      },
      transformResponse: (response) =>
        response ? Object.values(response) : [],
    }),
    getProductById: builder.query({
      query: (pro_iden) => {
        return `products.json?orderBy="pro_iden"&equalTo=${pro_iden}`;
      },
      transformResponse: (response) =>
        response ? Object.values(response) : [],
    }),
    getFavoritesProducts: builder.query({
      query: () => {
        return `products.json?orderBy="pro_top"&equalTo=true`;
      },
      transformResponse: (response) =>
        response ? Object.values(response) : [],
    }),
    
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
  useGetFavoritesProductsQuery,
  useGetProductByIdQuery,
} = app_Api;
