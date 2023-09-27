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
import { FC } from "react"
import { ColumnDef, Table } from "@tanstack/react-table"

interface ListProps {
  columns: ColumnDef<any>[]
  table: Table<any>
  createLink: string
  title: string
  createButtonText: string
  filterPlaceholder?: string
}

export const List: FC<ListProps> = ({ columns, table, createButtonText, createLink, title, filterPlaceholder }) => {
  return (
    <div className="m-4">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-3xl font-medium">{title}</h1>
        <Link to={createLink}>
          <Button className="flex items-center space-x-2 rounded-lg text-sm text-white" size={"sm"} type="button">
            <span>{createButtonText}</span>
          </Button>
        </Link>
      </div>

      <div className="flex items-center py-4">
        <Input
          placeholder={filterPlaceholder ?? "Search"}
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
