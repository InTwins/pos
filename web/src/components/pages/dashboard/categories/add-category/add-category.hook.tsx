import { useCreateCategoryMutation } from "@/store/features/category/category-api"
import { SubmitHandler, useForm } from "react-hook-form"
import { InputType, addCategorySchema } from "./add-category.validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useToast } from "@/components/ui/use-toast"

export const useAddCategory = () => {
  const [createCategory, { isLoading, isError }] = useCreateCategoryMutation()
  const { toast } = useToast()

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
  }
}
