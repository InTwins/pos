import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { BASE_URL } from "@/lib/config/constants"
import { type InputType, signUpSchema } from "./signup-form.validator"

export const useSignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isLoading, errors },
  } = useForm<InputType>({
    resolver: zodResolver(signUpSchema),
  })

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    console.log(data)
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    })
    const user = await response.json()
    console.log(user)
  }
  const submitHandler = handleSubmit(onSubmit)

  return {
    register,
    isLoading,
    errors,
    submitHandler,
  }
}
