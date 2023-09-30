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
  }),
})

export const { useCreateBrandMutation, useGetBrandsQuery } = brandApi
