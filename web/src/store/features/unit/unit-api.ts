import { BASE_URL } from "@/lib/config/constants"
import { apiSlice } from "../api/api-slice"

export const unitApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUnits: builder.query({
      query: () => `${BASE_URL}/units`,
    }),
    createUnit: builder.mutation({
      query: (body) => ({
        url: `${BASE_URL}/units`,
        method: "POST",
        body,
      }),
    }),
    deleteUnit: builder.mutation({
      query: (id: string) => ({
        url: `${BASE_URL}/units/${id}`,
        method: "DELETE",
      }),
    }),
    updateUnit: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `${BASE_URL}/units/${id}`,
        method: "PUT",
        body,
      }),
    }),
  }),
})

export const { useGetUnitsQuery, useCreateUnitMutation, useDeleteUnitMutation, useUpdateUnitMutation } = unitApi
