import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export const WelcomeNavbar = () => {
  return (
    <header className="container my-5 flex flex-col items-center justify-between md:flex-row">
      <div className="flex w-full items-center justify-between lg:w-auto">
        <a href="/" className="text-xl">
          <span className="text-slate-500">In</span>
          <span className="font-bold text-slate-800">Twins</span>
        </a>
      </div>

      <div>
        <div className="hidden min-w-[300px] shrink-0 items-center justify-end gap-4 md:flex">
          <Link to="/signin">
            <Button variant={"outline"}>Sign in</Button>
          </Link>
          <Link to="/signup">
            <Button>Sign up</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
