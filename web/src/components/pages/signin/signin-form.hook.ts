import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { InputType, signInSchema } from "./signin-form.validator"
import { useSignInMutation } from "@/store/features/auth/auth-api"
import { useNavigate } from "react-router-dom"
import { useToast } from "@/components/ui/use-toast"

export const useSignInForm = () => {
  const navigate = useNavigate()
  const { toast } = useToast()
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
      toast({
        title: "Success",
        description: "You have successfully logged in",
      })
      reset()
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
    error,
    submitHandler,
    handleSubmit,
    onSubmit,
  }
}
