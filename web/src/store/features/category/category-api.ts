import { apiSlice } from "../api/api-slice"

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories",
    }),
  }),
})

export const { useGetCategoriesQuery } = categoryApi
