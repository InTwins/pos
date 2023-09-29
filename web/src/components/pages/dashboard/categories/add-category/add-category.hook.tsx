import { useCreateCategoryMutation } from "@/store/features/category/category-api"
import { SubmitHandler, useForm } from "react-hook-form"
import { InputType, addCategorySchema } from "./add-category.validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"
import { useLocation, useSearchParams } from "react-router-dom"

export const useAddCategory = () => {
  const [isUpdateMode] = useState(false)
  const [createCategory, { isLoading, isError }] = useCreateCategoryMutation()
  const { toast } = useToast()
  const location = useLocation()
  const searchParams = useSearchParams()

  console.log({
    location,
    searchParams,
    update: location.pathname.includes("update"),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors: formErrors },
  } = useForm<InputType>({
    resolver: zodResolver(addCategorySchema),
  })

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    try {
      await createCategory(data).unwrap()
      toast({
        title: "Category created successfully",
        description: "success",
      })
    } catch (error) {
      console.error(error)
      toast({
        variant: "destructive",
        title: "Error creating category",
      })
    }

    reset()
  }

  const submitHandler = handleSubmit(onSubmit)

  return {
    register,
    isLoading,
    formErrors,
    isError,
    submitHandler,
    isUpdateMode,
  }
}
