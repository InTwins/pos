import { z } from "zod"

export const createCustomerValidator = z.object({
  name: z.string().min(2, "Enter minimum 2 characters"),
  email: z.string().email(),
  phoneNumber: z.string(),
  address: z.string(),
})

export const updateCustomerValidator = z.object({
  id: z.string(),
  name: z.string().min(2, "Enter minimum 2 characters"),
  email: z.string().email(),
  phoneNumber: z.string(),
  address: z.string(),
})

export const deleteCustomerValidator = z.object({
  id: z.string(),
})
