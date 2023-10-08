import { z } from "zod"

export const addProductSchema = z.object({
  name: z.string().min(2, "Minimum 2 characters required"),
  description: z.string(),
  category: z.object({
    value: z.string(),
    label: z.string(),
  }),
  brand: z.object({
    value: z.string(),
    label: z.string(),
  }),
  unit: z.object({
    value: z.string(),
    label: z.string(),
  }),
  imageUrl: z
    .custom<FileList>()
    .transform((file) => file.length > 0 && file.item(0))
    .refine((file) => !file || (!!file && file.size <= 10 * 1024 * 1024), {
      message: "The profile picture must be a maximum of 10MB.",
    })
    .refine((file) => !file || (!!file && file.type?.startsWith("image")), {
      message: "Only images are allowed to be sent.",
    }),
})

export type InputType = z.infer<typeof addProductSchema>
