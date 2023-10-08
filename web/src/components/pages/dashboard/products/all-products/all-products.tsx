import { useAllProducts } from "./all-products.hook"
import { List } from "@/components/shared/list"

export const AllProducts = () => {
  const { columns, table } = useAllProducts()

  return (
    <List
      columns={columns}
      table={table}
      createLink="/dashboard/products/create"
      title="Products"
      createButtonText="Add Products"
      filterPlaceholder="Filter products"
    />
  )
}
