import { useCreateBrandMutation } from "@/store/features/brand/brand-api"
import { SubmitHandler, useForm } from "react-hook-form"
import { InputType, addBrandSchema } from "./add-brand.validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useToast } from "@/components/ui/use-toast"

export const useAddBrand = () => {
  const [createBrand, { isLoading, isError }] = useCreateBrandMutation()
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors: formErrors },
  } = useForm<InputType>({
    resolver: zodResolver(addBrandSchema),
  })

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    try {
      await createBrand(data).unwrap()
      toast({
        title: "Brand created successfully",
        description: "success",
      })
      reset()
    } catch (error) {
      console.error(error)
      toast({
        variant: "destructive",
        title: "Error creating brand",
      })
    }
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
