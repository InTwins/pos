import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom"
import { Icons } from "@/components/icons"
import { useAddUnit } from "./add-unit.hook"

export const AddUnit = () => {
  const { register, submitHandler, isLoading, isUpdateMode } = useAddUnit()

  return (
    <div className=" h-full w-full grow items-center justify-center p-4">
      <Card>
        <CardContent>
          <Link to="/dashboard/units">
            <Button variant={"ghost"} className="mt-4 flex items-center gap-2 px-0">
              <ChevronLeft /> All Units
            </Button>
          </Link>

          <div className="space-y-8">
            <form onSubmit={submitHandler}>
              <div className="space-y-2">
                <h2 className="mt-4 text-3xl font-semibold">{isUpdateMode ? "Update Unit" : "Add New Unit"}</h2>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input {...register("name")} id="name" placeholder="Add unit name" type="text" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    {...register("description")}
                    className="min-h-[100px]"
                    id="description"
                    placeholder="Add description"
                  />
                </div>
                <Button className="bg-gray-800 text-white" type="submit" disabled={isLoading}>
                  {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                  {isUpdateMode ? "Update Unit" : "Add Unit"}
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
