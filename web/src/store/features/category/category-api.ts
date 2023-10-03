import { BASE_URL } from "@/lib/config/constants"
import { apiSlice } from "../api/api-slice"

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `${BASE_URL}/categories`,
    }),
    createCategory: builder.mutation({
      query: (body) => ({
        url: `${BASE_URL}/categories`,
        method: "POST",
        body,
      }),
    }),
    deleteCategory: builder.mutation({
      query: (categoryId: string) => ({
        url: `${BASE_URL}/categories/${categoryId}`,
        method: "DELETE",
      }),
    }),
    updateCategory: builder.mutation({
      query: ({ categoryId, ...body }) => ({
        url: `${BASE_URL}/categories/${categoryId}`,
        method: "PUT",
        body,
      }),
    }),
  }),
})

export const {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} = categoryApi
