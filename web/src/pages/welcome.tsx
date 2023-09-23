import heroImage from "@/assets/hero.png";
import { WelcomeFooter } from "@/components/pages/welcome/footer";
import { WelcomeNavbar } from "@/components/pages/welcome/navbar";
import { Button } from "@/components/ui/button";

export const WelcomePage = () => {
  return (
    <div className="min-h-screen">
      <WelcomeNavbar />
      <main className="grid lg:grid-cols-2 place-items-center container pt-16 pb-8 md:pt-12 md:pb-24">
        <div className="py-6 md:order-1 hidden md:block">
          <img
            src={heroImage}
            alt="Astronaut in the air"
            className="aspect-[4:3]"
            sizes="(max-width: 800px) 100vw, 620px"
            loading="eager"
          />
        </div>
        <div>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
            Marketing website done with Astro
          </h1>
          <p className="text-lg mt-4 text-slate-600 max-w-xl">
            Astroship is a starter template for startups, marketing websites &
            landing pages.
            <wbr /> Built with Astro.build and TailwindCSS. You can quickly
            create any website with this starter.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button>
              <a
                href="#"
                target="_blank"
                className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 flex gap-1 items-center justify-center"
                rel="noopener"
              >
                <svg
                  className="text-white w-5 h-5"
                  name="bx:bxs-cloud-download"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    fill="currentColor"
                    fill-opacity=".16"
                  ></circle>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.75 12a8.25 8.25 0 0 1 11.916-7.393.75.75 0 1 0 .668-1.343A9.713 9.713 0 0 0 12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75c0-.366-.02-.727-.06-1.082a.75.75 0 1 0-1.49.164A8.25 8.25 0 1 1 3.75 12Zm17.78-6.47a.75.75 0 0 0-1.06-1.06L12 12.94l-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l9-9Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Download for Free
              </a>
            </Button>
            <Button variant={"outline"}>
              <a
                rel="noopener"
                href="https://github.com/surjithctly/astroship"
                className="flex gap-1 items-center justify-center"
                target="_blank"
              >
                <svg
                  className="text-black w-4 h-4"
                  name="bx:bxs-cloud-download"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    fill="currentColor"
                    fill-opacity=".16"
                  ></circle>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.75 12a8.25 8.25 0 0 1 11.916-7.393.75.75 0 1 0 .668-1.343A9.713 9.713 0 0 0 12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75c0-.366-.02-.727-.06-1.082a.75.75 0 1 0-1.49.164A8.25 8.25 0 1 1 3.75 12Zm17.78-6.47a.75.75 0 0 0-1.06-1.06L12 12.94l-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l9-9Z"
                    fill="currentColor"
                  ></path>
                </svg>
                GitHub Repo
              </a>
            </Button>
          </div>
        </div>
      </main>
      <WelcomeFooter />
    </div>
  );
};
