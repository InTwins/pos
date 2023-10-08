import { SubmitHandler, useForm } from "react-hook-form"
import { InputType, addProductSchema } from "./add-product.validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useToast } from "@/components/ui/use-toast"
import { useLocation, useSearchParams } from "react-router-dom"
import {
  useCreateUnitMutation,
  useGetUnitsQuery,
  useUpdateUnitMutation,
} from "@/store/features/unit/unit-api"
import { useGetCategoriesQuery } from "@/store/features/category/category-api"
import { useGetBrandsQuery } from "@/store/features/brand/brand-api"

export const useAddProduct = () => {
  const [createUnit, { isLoading: isCreateLoading, isError: isCreateError }] =
    useCreateUnitMutation()
  const [updateUnit, { isLoading: isUpdateLoading, isError: isUpdateError }] =
    useUpdateUnitMutation()

  const { data: categoryList } = useGetCategoriesQuery("category")
  const { data: brandList } = useGetBrandsQuery("brand")
  const { data: unitList } = useGetUnitsQuery("unit")
  const { toast } = useToast()
  const location = useLocation()
  const [searchParams] = useSearchParams()

  const isUpdateMode = location.pathname.includes("update")
  const isLoading = isCreateLoading || isUpdateLoading
  const isError = isCreateError || isUpdateError

  const categoryOptions =
    categoryList?.data?.map((category: any) => ({
      label: category.name,
      value: category.id,
    })) ?? []

  const brandOptions =
    brandList?.data?.map((brand: any) => ({
      label: brand.name,
      value: brand.id,
    })) ?? []

  const unitOptions =
    unitList?.data?.map((unit: any) => ({
      label: unit.name,
      value: unit.id,
    })) ?? []

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors: formErrors },
  } = useForm<InputType>({
    resolver: zodResolver(addProductSchema),
    defaultValues: {
      name: searchParams.get("name") || "",
      description: searchParams.get("description") || "",
    },
  })

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    console.log(data)
    return

    if (isUpdateMode && searchParams.get("id")) {
      try {
        await updateUnit({
          ...data,
          id: searchParams.get("id") as string,
        }).unwrap()
        toast({
          title: "Product updated successfully",
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
          title: "Product created successfully",
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
    control,
    categoryOptions,
    brandOptions,
    unitOptions,
  }
}
