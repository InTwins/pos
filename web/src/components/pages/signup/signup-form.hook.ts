import { useSignUpMutation } from "@/store/features/auth/auth-api"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { signUpSchema, type InputType } from "./signup-form.validator"
import { useNavigate } from "react-router-dom"
import { useToast } from "@/components/ui/use-toast"

export const useSignUpForm = () => {
  const [matchPasswordError, setMatchPasswordError] = useState(false)
  const navigate = useNavigate()
  const { toast } = useToast()

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
      await signUp(data).unwrap()
      toast({
        title: "Success",
        description: "You have successfully signed up",
      })
      navigate("/dashboard")
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong",
      })
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
