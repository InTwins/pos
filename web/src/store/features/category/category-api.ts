import { apiSlice } from "../api/api-slice"

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories",
    }),
    createCategory: builder.mutation({
      query: (body) => ({
        url: "/categories",
        method: "POST",
        body,
      }),
    }),
  }),
})

export const { useGetCategoriesQuery, useCreateCategoryMutation } = categoryApi
