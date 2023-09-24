import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { InputType, signInSchema } from "./signin-form.validator"

export const useSignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isLoading, errors },
  } = useForm<InputType>({
    resolver: zodResolver(signInSchema),
  })

  const onSubmit: SubmitHandler<InputType> = (data) => {
    console.log(data)
  }

  const submitHandler = handleSubmit(onSubmit)

  return {
    register,
    isLoading,
    errors,
    submitHandler,
  }
}
