import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useToast } from "@/components/ui/use-toast"
import { useDeleteUnitMutation } from "@/store/features/unit/unit-api"
import { ColumnDef, Row } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Link } from "react-router-dom"
import { type Product } from "./all-products.type"

// eslint-disable-next-line react-refresh/only-export-components
const ActionCell = ({ row }: { row: Row<Product> }) => {
  const product = row.original

  const [deleteUnit] = useDeleteUnitMutation()
  const { toast } = useToast()

  const handleDeleteUnit = async (id: string) => {
    try {
      await deleteUnit(id).unwrap()
      toast({
        title: "Success!",
        description: "Product deleted successfully!",
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
            to={`/dashboard/products/update?id=${product.id}&name=${product.name}&description=${product.description}`}
          >
            Edit
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-red-500"
          onClick={() => handleDeleteUnit(product.id)}
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const allProductColumns: ColumnDef<Product>[] = [
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
