import { z } from "zod"

export const createSupplierValidator = z.object({
  firstName: z.string().min(2, "Enter minimun 2 characters"),
  lastName: z.string().min(2, "Enter minimun 2 characters"),
  phoneNumber: z.string(),
  company: z.string().min(4, "Enter minimun 2 characters"),
  description: z.string().min(4, "Enter minimun 2 characters"),
})

export const updateSupplierValidator = z.object({
  id: z.string(),
  firstName: z.string().min(2, "Enter minimun 2 characters"),
  lastName: z.string().min(2, "Enter minimun 2 characters"),
  phoneNumber: z.string(),
  company: z.string().min(4, "Enter minimun 2 characters"),
  description: z.string().min(4, "Enter minimun 2 characters"),
})

export const deleteSupplierValidator = z.object({
  id: z.string(),
})
