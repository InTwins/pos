import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"
import { useSignInForm } from "./signin-form.hook"

export const SignInForm = () => {
  const { register, isLoading, submitHandler } = useSignInForm()

  return (
    <div className={cn("grid gap-6")}>
      {/* {error && error.data && (
        <div className="my-2 rounded border bg-red-100 px-3 py-1.5 text-red-700">{error?.data?.message as string}</div>
      )} */}

      <form onSubmit={submitHandler}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              {...register("email", { required: "Email is required!" })}
              placeholder="name@example.com"
              type="email"
              name="email"
              id="email"
              disabled={isLoading}
            />
          </div>

          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              {...register("password", { required: "Password is required!" })}
              placeholder="Enter Password"
              type="password"
              name="password"
              id="password"
              disabled={isLoading}
            />
          </div>
          <Button type={"submit"} disabled={isLoading}>
            {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            Sign In with Email
          </Button>
        </div>
      </form>
    </div>
  )
}
