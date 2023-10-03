import { SubmitHandler, useForm } from "react-hook-form"
import { InputType, addUnitSchema } from "./add-unit.validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useToast } from "@/components/ui/use-toast"
import { useLocation, useSearchParams } from "react-router-dom"
import { useCreateUnitMutation, useUpdateUnitMutation } from "@/store/features/unit/unit-api"

export const useAddUnit = () => {
  const [createUnit, { isLoading: isCreateLoading, isError: isCreateError }] = useCreateUnitMutation()
  const [updateUnit, { isLoading: isUpdateLoading, isError: isUpdateError }] = useUpdateUnitMutation()
  const { toast } = useToast()
  const location = useLocation()
  const [searchParams] = useSearchParams()

  const isUpdateMode = location.pathname.includes("update")
  const isLoading = isCreateLoading || isUpdateLoading
  const isError = isCreateError || isUpdateError

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors: formErrors },
  } = useForm<InputType>({
    resolver: zodResolver(addUnitSchema),
    defaultValues: {
      name: searchParams.get("name") || "",
      description: searchParams.get("description") || "",
    },
  })

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    if (isUpdateMode && searchParams.get("id")) {
      try {
        await updateUnit({
          ...data,
          id: searchParams.get("id") as string,
        }).unwrap()
        toast({
          title: "Unit updated successfully",
          description: "success",
        })
        reset()
      } catch (error) {
        console.error(error)
        toast({
          variant: "destructive",
          title: "Error updating unit",
        })
      }
    } else {
      try {
        await createUnit(data).unwrap()
        toast({
          title: "Unit created successfully",
          description: "success",
        })
        reset()
      } catch (error) {
        console.error(error)
        toast({
          variant: "destructive",
          title: "Error creating unit",
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
