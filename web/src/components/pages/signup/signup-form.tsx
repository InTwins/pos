import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signUpSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
});

type InputType = z.infer<typeof signUpSchema>;

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isLoading, errors },
  } = useForm<InputType>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<InputType> = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <div className={cn("grid gap-6")}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Name
            </Label>
            <Input
              {...register("name", { required: "Name is required!" })}
              placeholder="John Doe"
              type="text"
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              {...register("email", { required: "Email is required!" })}
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete=""
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Password
            </Label>
            <Input
              {...register("password", { required: "Password is required!" })}
              placeholder="Enter password"
              type="password"
              autoCapitalize="none"
              autoComplete=""
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Confirm Password
            </Label>
            <Input
              {...register("confirmPassword", {
                required: "Please confirm your password!",
              })}
              placeholder="Confirm Password"
              type="password"
              autoCapitalize="none"
              autoComplete=""
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign Up with Email
          </Button>
        </div>
      </form>
    </div>
  );
};
