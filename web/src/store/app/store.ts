import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "../features/api/api-slice"
import { authSliceReducer } from "../features/auth/auth-slice"
import { brandReducer } from "../features/brand/brand-slice"
import { unitReducer } from "../features/unit/unit-slice"

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    brand: brandReducer,
    unit: unitReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
