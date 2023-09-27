import { useAllBrands } from "./all-brands.hook"
import { List } from "@/components/shared/list"

export const AllBrands = () => {
  const { columns, table } = useAllBrands()

  return (
    <List
      columns={columns}
      table={table}
      createLink="/dashboard/brands/create"
      title="Brands"
      createButtonText="Add Brand"
      filterPlaceholder="Filter brands"
    />
  )
}
