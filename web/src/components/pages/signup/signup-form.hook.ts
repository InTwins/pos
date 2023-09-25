import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { type InputType, signUpSchema } from "./signup-form.validator"
import { useSignUp } from "@/hooks/use-auth"

export const useSignUpForm = () => {
  const { mutate, error, data } = useSignUp()

  const {
    register,
    handleSubmit,
    formState: { isLoading, errors: formErrors },
  } = useForm<InputType>({
    resolver: zodResolver(signUpSchema),
  })

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    mutate(data)
  }
  const submitHandler = handleSubmit(onSubmit)

  return {
    error,
    data,
    register,
    isLoading,
    formErrors,
    submitHandler,
  }
}
