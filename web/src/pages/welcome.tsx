import heroImage from "@/assets/hero.png"
import { WelcomeFooter } from "@/components/pages/welcome/footer"
import { WelcomeNavbar } from "@/components/pages/welcome/navbar"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export const WelcomePage = () => {
  return (
    <div className="min-h-screen">
      <WelcomeNavbar />
      <main className="container grid place-items-center pb-8 pt-16 md:pb-8 md:pt-8 lg:grid-cols-2">
        <div className="hidden py-6 md:order-1 md:block">
          <img
            src={heroImage}
            alt="Astronaut in the air"
            className="aspect-[4:3]"
            sizes="(max-width: 800px) 100vw, 620px"
            loading="eager"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold lg:text-6xl lg:tracking-tight xl:text-7xl xl:tracking-tighter">
            Marketing website done with Astro
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-600">
            Astroship is a starter template for startups, marketing websites & landing pages.
            <wbr /> Built with Astro.build and TailwindCSS. You can quickly create any website with this starter.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button>
              <Link
                to="/signup"
                className="flex items-center justify-center gap-1 rounded text-center ring-gray-200 ring-offset-2 transition focus-visible:ring-2"
                rel="noopener"
              >
                <svg
                  className="h-5 w-5 text-white"
                  name="bx:bxs-cloud-download"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity=".16"></circle>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.75 12a8.25 8.25 0 0 1 11.916-7.393.75.75 0 1 0 .668-1.343A9.713 9.713 0 0 0 12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75c0-.366-.02-.727-.06-1.082a.75.75 0 1 0-1.49.164A8.25 8.25 0 1 1 3.75 12Zm17.78-6.47a.75.75 0 0 0-1.06-1.06L12 12.94l-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l9-9Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Sign Up Now
              </Link>
            </Button>
            <Button variant={"outline"}>
              <Link rel="noopener" to="/signin" className="flex items-center justify-center gap-1">
                <svg
                  className="h-4 w-4 text-black"
                  name="bx:bxs-cloud-download"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity=".16"></circle>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.75 12a8.25 8.25 0 0 1 11.916-7.393.75.75 0 1 0 .668-1.343A9.713 9.713 0 0 0 12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75c0-.366-.02-.727-.06-1.082a.75.75 0 1 0-1.49.164A8.25 8.25 0 1 1 3.75 12Zm17.78-6.47a.75.75 0 0 0-1.06-1.06L12 12.94l-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l9-9Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Login to Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <WelcomeFooter />
    </div>
  )
}
