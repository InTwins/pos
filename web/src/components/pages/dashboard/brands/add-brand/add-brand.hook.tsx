import { useCreateBrandMutation, useUpdateBrandMutation } from "@/store/features/brand/brand-api"
import { SubmitHandler, useForm } from "react-hook-form"
import { InputType, addBrandSchema } from "./add-brand.validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useToast } from "@/components/ui/use-toast"
import { useLocation, useSearchParams } from "react-router-dom"

export const useAddBrand = () => {
  const [createBrand, { isLoading: isCreateLoading, isError: isCreateError }] = useCreateBrandMutation()
  const [updateBrand, { isLoading: isUpdateLoading, isError: isUpdateError }] = useUpdateBrandMutation()
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const { toast } = useToast()

  const isUpdateMode = location.pathname.includes("update")
  const isLoading = isCreateLoading || isUpdateLoading
  const isError = isCreateError || isUpdateError

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors: formErrors },
  } = useForm<InputType>({
    resolver: zodResolver(addBrandSchema),
    defaultValues: {
      name: searchParams.get("name") || "",
      description: searchParams.get("description") || "",
    },
  })

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    if (isUpdateMode && searchParams.get("id")) {
      try {
        await updateBrand({
          ...data,
          id: searchParams.get("id") as string,
        }).unwrap()
        toast({
          title: "Brand updated successfully",
          description: "success",
        })
        reset()
      } catch (error) {
        console.error(error)
        toast({
          variant: "destructive",
          title: "Error updating brand",
        })
      }
    } else {
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
