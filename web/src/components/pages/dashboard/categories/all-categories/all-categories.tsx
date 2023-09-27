import { ChevronDown } from "lucide-react"
import { TableList } from "@/components/shared/table"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"

import { useAllCategories } from "./all-categories.hook"

export const AllCategories = () => {
  const { columns, table } = useAllCategories()

  return (
    <div className="m-4">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-3xl font-medium">Categories</h1>
        <Link to="/dashboard/categories/create">
          <Button className="flex items-center space-x-2 rounded-lg text-sm text-white" size={"sm"} type="button">
            <span>Add Category</span>
          </Button>
        </Link>
      </div>

      <div className="flex items-center py-4">
        <Input
          placeholder="Filter categories"
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <TableList table={table} columns={columns} />
    </div>
  )
}
