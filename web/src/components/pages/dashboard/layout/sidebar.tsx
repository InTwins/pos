import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { sidebar } from "@/data/sidebar";

export const Sidebar = () => {
  return (
    <div className={cn("pb-12 h-[calc(100vh_-_40px)] overflow-y-auto")}>
      <div className="space-y-0 py-4">
        <div className="px-4 py-2">
          <Link to="/dashboard">
            <h2 className="text-lg font-semibold tracking-tight">Dashboard</h2>
          </Link>
        </div>
        <Accordion type="single" collapsible className="w-full px-4">
          {sidebar.map((item, index) => (
            <AccordionItem
              key={index}
              value={index.toString()}
              className="border-none"
            >
              <AccordionTrigger className="py-2">
                <h2 className="text-lg font-semibold tracking-tight">
                  {item.title}
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                {item.children.map((child, index) => (
                  <Link to={child.link} key={index}>
                    <Button variant="ghost" className="w-full justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                      >
                        <path d="M21 15V6" />
                        <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        <path d="M12 12H3" />
                        <path d="M16 6H3" />
                        <path d="M12 18H3" />
                      </svg>
                      {child.title}
                    </Button>
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
