import { apiSlice } from "../api/api-slice"

export const brandApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBrands: builder.query({
      query: () => "/brands",
    }),
    createBrand: builder.mutation({
      query: (body) => ({
        url: "/brands",
        method: "POST",
        body,
      }),
    }),
  }),
})

export const { useCreateBrandMutation, useGetBrandsQuery } = brandApi
