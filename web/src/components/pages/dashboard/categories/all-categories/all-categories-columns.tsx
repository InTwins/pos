import { Button } from "@/components/ui/button"
import { ColumnDef, Row } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Category } from "./all-categories.type"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useDeleteCategoryMutation } from "@/store/features/category/category-api"
import { useToast } from "@/components/ui/use-toast"
import { Link } from "react-router-dom"

const ActionCell = ({ row }: { row: Row<Category> }) => {
  const category = row.original

  const [deleteCategory] = useDeleteCategoryMutation()
  const { toast } = useToast()

  const handleDeleteCategory = async (id: string) => {
    try {
      await deleteCategory(id)
      toast({
        title: "Success!",
        description: "Category deleted successfully!",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error!",
        description: "Something went wrong!",
      })
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem>
          <Link
            to={`/dashboard/categories/update?id=${category.id}&name=${category.name}&description=${category.description}`}
          >
            Edit
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-red-500"
          onClick={() => handleDeleteCategory(category.id)}
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const allCategoryColumns: ColumnDef<Category>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <div className="">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "description",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Description
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="">{row.getValue("description")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,

    header: () => {
      return (
        <Button variant="ghost" onClick={() => {}}>
          Actions
        </Button>
      )
    },

    cell: ActionCell,
  },
]
