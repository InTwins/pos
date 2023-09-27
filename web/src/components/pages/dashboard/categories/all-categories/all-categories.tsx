import { useAllCategories } from "./all-categories.hook"
import { List } from "@/components/shared/list"

export const AllCategories = () => {
  const { columns, table } = useAllCategories()

  return (
    <List
      columns={columns}
      table={table}
      createLink="/dashboard/categories/create"
      title="Categories"
      createButtonText="Add Category"
      filterPlaceholder="Filter categories"
    />
  )
}
