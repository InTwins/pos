import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import { type FC, type Dispatch, type SetStateAction, useState } from "react"

export interface DropdownSearchProps {
  data: string[]
  boxWidth?: string
  value: string
  placeholder?: string
  setValue: Dispatch<SetStateAction<string | undefined>>
}

export const DropdownSearch: FC<DropdownSearchProps> = ({
  placeholder = "Select an item",
  data,
  boxWidth: width,
  value,
  setValue,
}) => {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="">
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="text-semibold relative w-full justify-between border-2 px-6 pb-9 pt-9 text-lg"
        >
          {value ? value : placeholder}
          {/* <span className="absolute left-6 top-2 text-xs font-light uppercase">
            {badge}
          </span> */}
          {/* <span className="absolute bottom-2 left-6 text-xs font-light">
            {value ? value.subTitle : subTitlePlaceHolder}
          </span> */}
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("w-[400px] p-0", width)}>
        <Command>
          <CommandInput placeholder="Type to search..." />
          <ScrollArea className="h-[300px]">
            <CommandEmpty>Item Not found!</CommandEmpty>
            <CommandGroup>
              {data.map((item, index) => (
                <CommandItem
                  key={index}
                  onSelect={(currentValue) => {
                    setValue(data.find((item) => item === currentValue) ?? "")
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === item ? "opacity-100" : "opacity-0",
                    )}
                  />
                  <div className="flex w-full items-center justify-between">
                    <span className="flex flex-col items-start">
                      <span className="text-sm font-semibold">{item}</span>
                      <span className="text-xs font-light">{item}</span>
                    </span>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
