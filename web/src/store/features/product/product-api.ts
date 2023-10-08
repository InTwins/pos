import { BASE_URL } from "@/lib/config/constants"
import { apiSlice } from "../api/api-slice"

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `${BASE_URL}/products`,
    }),
    createProduct: builder.mutation({
      query: (body) => ({
        url: `${BASE_URL}/products`,
        method: "POST",
        body,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id: string) => ({
        url: `${BASE_URL}/products/${id}`,
        method: "DELETE",
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `${BASE_URL}/products/${id}`,
        method: "PUT",
        body,
      }),
    }),
  }),
})

export const {
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetProductsQuery,
  useUpdateProductMutation,
} = productApi
