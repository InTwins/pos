import { useAllUnits } from "./all-units.hook"
import { List } from "@/components/shared/list"

export const AllUnits = () => {
  const { columns, table } = useAllUnits()

  return (
    <List
      columns={columns}
      table={table}
      createLink="/dashboard/units/create"
      title="Units"
      createButtonText="Add Unit"
      filterPlaceholder="Filter units"
    />
  )
}
