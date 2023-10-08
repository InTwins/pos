import { useToast } from "@/components/ui/use-toast"
import { useGetBrandsQuery } from "@/store/features/brand/brand-api"
import { useGetCategoriesQuery } from "@/store/features/category/category-api"
import {
  useCreateProductMutation,
  useUpdateProductMutation,
} from "@/store/features/product/product-api"
import { useGetUnitsQuery } from "@/store/features/unit/unit-api"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { useLocation, useSearchParams } from "react-router-dom"
import { InputType, addProductSchema } from "./add-product.validator"

export const useAddProduct = () => {
  const [
    createProduct,
    { isLoading: isCreateLoading, isError: isCreateError },
  ] = useCreateProductMutation()
  const [
    updateProduct,
    { isLoading: isUpdateLoading, isError: isUpdateError },
  ] = useUpdateProductMutation()

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
    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("categoryId", data.category.value)
    formData.append("brandId", data.brand.value)
    formData.append("unitId", data.unit.value)
    formData.append("image", data.imageUrl as Blob)
    // formData.values()
    console.log({ data, formData, value: formData.values })

    if (isUpdateMode && searchParams.get("id")) {
      try {
        await updateProduct({
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
        await createProduct(formData).unwrap()
        toast({
          title: "Product created successfully",
          description: "success",
        })
        reset()
      } catch (error) {
        console.error(error)
        toast({
          variant: "destructive",
          title: "Error creating product",
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
