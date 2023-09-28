import { apiSlice } from "../api/api-slice"
import { userLoggedIn, userLoggedOut } from "./auth-slice"

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: "auth/signup",
        method: "POST",
        body: data,
      }),
      onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
        try {
          const result = await queryFulfilled
          const data = {
            token: result.data?.data?.token,
            user: result.data?.data?.user,
          }
          localStorage.setItem("userAuth", JSON.stringify(data))
          dispatch(userLoggedIn(data))
        } catch (error) {
          // console.log(error)
        }
      },
    }),

    signIn: builder.mutation({
      query: (data) => ({
        url: "auth/signin",
        method: "POST",
        body: data,
      }),
      onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
        try {
          const result = await queryFulfilled
          const data = {
            token: result.data?.data?.token,
            user: result.data?.data?.user,
          }
          dispatch(userLoggedIn(data))
        } catch (error) {
          // console.log(error)
        }
      },
    }),
    signOut: builder.mutation({
      query: () => ({
        url: "auth/signout",
        method: "GET",
      }),
      onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
        try {
          await queryFulfilled
          dispatch(userLoggedOut())
        } catch (error) {
          // console.log(error)
        }
      },
    }),

    me: builder.query({
      query: () => ({
        url: "auth/me",
        method: "GET",
      }),

      onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
        try {
          const result = await queryFulfilled
          const data = {
            token: result.data?.data?.token,
            user: result.data?.data?.user,
          }
          dispatch(userLoggedIn(data))
        } catch (error) {
          // console.log(error)
        }
      },
    }),
  }),
})

export const { useSignInMutation, useSignUpMutation, useSignOutMutation, useMeQuery } = authApi
