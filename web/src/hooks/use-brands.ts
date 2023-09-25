import { getBrands } from "@/lib/api/brand.api"
import { Querykeys } from "@/lib/config/constants"
import { useQuery, useMutation } from "@tanstack/react-query"

export const useGetBrands = () => {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: [Querykeys.BRAND],
    queryFn: getBrands,
  })

  return {
    data,
    error,
    isError,
    isLoading,
  }
}

export const usePostBrand = () => {
  const { mutate, isLoading, error, isError } = useMutation({
    // mutationFn:
    onSuccess: () => {
      console.log("Success!")
    },
  })

  return {
    mutate,
    isLoading,
    error,
    isError,
  }
}
