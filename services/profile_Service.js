import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profile_Api = createApi({
  reducerPath: "profile_Api",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_BASE_URL }),
  tagTypes: ["imageProfile"],
  endpoints: (builder) => ({
    getImageProfile: builder.query({
      query: (local_Id) => {
        return `profileUsers.json?orderBy="local_Id"&equalTo="${local_Id}"`;
      },
/*       transformResponse: (response) =>
        response
          ? Object.entries(response).map(([key, e]) => ({
              profile_key_firebase: key,
              ...e,
            }))
          : [], */
      providesTags: ["imageProfile"],
    }),

    postImageProfile: builder.mutation({
      query: ({ ...dataProfileImage }) => ({
        url: `profileUsers.json`,
        method: "POST",
        body: dataProfileImage,
      }),
      invalidatesTags: ["imageProfile"],
    }),

    deleteImagePorfileByLocalId: builder.mutation({
      query: (key_profile) => ({
        url: `profileUsers/${key_profile}.json`,
        method: "DELETE",
      }),
      invalidatesTags: ["imageProfile"],
    }),
  }),
});

export const {
  useGetImageProfileQuery,
  usePostImageProfileMutation,
  useDeleteImagePorfileByLocalIdMutation,
} = profile_Api;
