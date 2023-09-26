import { useSignUpMutation } from "@/store/features/auth/auth-api"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { signUpSchema, type InputType } from "./signup-form.validator"
import { useNavigate } from "react-router-dom"

export const useSignUpForm = () => {
  const [matchPasswordError, setMatchPasswordError] = useState(false)
  const navigate = useNavigate()

  const [signUp, { isError, isLoading, data }] = useSignUpMutation()

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<InputType>({
    resolver: zodResolver(signUpSchema),
  })

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    if (data.password !== data.confirmPassword) {
      setMatchPasswordError(true)
      return
    }
    setMatchPasswordError(false)
    try {
      const response = await signUp(data).unwrap()
      console.log(response)
      navigate("/dashboard")
    } catch (error) {
      console.error(error)
    }
  }
  const submitHandler = handleSubmit(onSubmit)

  return {
    register,
    isLoading,
    formErrors,
    submitHandler,
    matchPasswordError,
    isError,
    data,
  }
}
