import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { InputType, signInSchema } from "./signin-form.validator"
import { useSignIn } from "@/hooks/use-auth"
// import { getBrands } from "@/lib/api/brand.api"
// import { useEffect } from "react"
// import { useNavigate, useLocation } from "react-router-dom"
// import { useEffect } from "react"
// import { useBrands } from "../../../hooks/use-brands"

export const useSignInForm = () => {
  const { mutate } = useSignIn()
  // const navigate = useNavigate()
  // const location = useLocation()
  // const from = location?.state?.from?.pathname ?? "/"

  const {
    register,
    handleSubmit,
    reset,
    formState: { isLoading, errors },
  } = useForm<InputType>({
    resolver: zodResolver(signInSchema),
  })

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    try {
      console.log(data)
      mutate(data)
    } catch (error) {
      console.error(error)
    }

    reset()
  }

  const submitHandler = handleSubmit(onSubmit)

  return {
    register,
    isLoading,
    errors,
    submitHandler,
    handleSubmit,
    onSubmit,
  }
}
