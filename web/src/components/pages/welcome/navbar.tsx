import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const menuitems = [
  {
    title: "Features",
    path: "#",
  },
  {
    title: "Pricing",
    path: "/#",
  },
  {
    title: "About",
    path: "/#",
  },
  {
    title: "Blog",
    path: "/#",
  },
  {
    title: "Contact",
    path: "/#",
  },
];

export const WelcomeNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex container flex-col lg:flex-row justify-between items-center my-5">
      <div className="flex w-full lg:w-auto items-center justify-between">
        <a href="/" className="text-lg">
          <span className="font-bold text-slate-800">Astro</span>
          <span className="text-slate-500">ship</span>
        </a>
        <div className="block lg:hidden">
          {showMenu ? (
            <X
              className="w-4 h-4 text-gray-800 cursor-pointer"
              onClick={() => setShowMenu(false)}
            />
          ) : (
            <Menu
              className="w-4 h-4 text-gray-800 cursor-pointer"
              onClick={() => setShowMenu(true)}
            />
          )}
        </div>
      </div>
      <div
        className={cn(
          "w-full lg:w-auto mt-2 lg:flex lg:mt-0",
          !showMenu && "hidden"
        )}
      >
        <ul className="flex flex-col lg:flex-row lg:gap-3">
          {menuitems.map((item, index) => (
            <li key={index}>
              <a
                href={item.path}
                className="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden flex items-center mt-3 gap-4">
          <Link to="/signin">
            <Button variant={"outline"}>Sign in</Button>
          </Link>
          <Link to="/signup">
            <Button>Sign up</Button>
          </Link>
        </div>
      </div>
      <div>
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/signin">
            <Button variant={"outline"}>Sign in</Button>
          </Link>
          <Link to="/signup">
            <Button>Sign up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
