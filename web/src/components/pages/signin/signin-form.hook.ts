import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { InputType, signInSchema } from "./signin-form.validator"
import { useSignInMutation } from "@/store/features/auth/auth-api"
import { useNavigate } from "react-router-dom"

export const useSignInForm = () => {
  const navigate = useNavigate()
  const [signIn, { isLoading, error }] = useSignInMutation()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors: formErrors },
  } = useForm<InputType>({
    resolver: zodResolver(signInSchema),
  })

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    try {
      await signIn(data).unwrap()
      navigate("/dashboard")
    } catch (error) {
      console.error(error)
    }

    reset()
  }

  const submitHandler = handleSubmit(onSubmit)

  return {
    register,
    isLoading,
    formErrors,
    error,
    submitHandler,
    handleSubmit,
    onSubmit,
  }
}
