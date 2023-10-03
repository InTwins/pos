import { BASE_URL } from "@/lib/config/constants"
import { apiSlice } from "../api/api-slice"

export const brandApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBrands: builder.query({
      query: () => `${BASE_URL}/brands`,
    }),
    createBrand: builder.mutation({
      query: (body) => ({
        url: `${BASE_URL}/brands`,
        method: "POST",
        body,
      }),
    }),
    updateBrand: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `${BASE_URL}/brands/${id}`,
        method: "PUT",
        body,
      }),
    }),
    deleteBrand: builder.mutation({
      query: (id) => ({
        url: `${BASE_URL}/brands/${id}`,
        method: "DELETE",
      }),
    }),
  }),
})

export const { useCreateBrandMutation, useGetBrandsQuery, useDeleteBrandMutation, useUpdateBrandMutation } = brandApi
