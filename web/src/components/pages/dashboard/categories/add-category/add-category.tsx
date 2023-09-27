import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom"

export const AddCategory = () => {
  return (
    <div className=" h-full w-full grow items-center justify-center p-4">
      <Card>
        <CardContent>
          <Link to="/dashboard/categories">
            <Button variant={"ghost"} className="mt-4 flex items-center gap-2 px-0">
              <ChevronLeft /> All Categories
            </Button>
          </Link>

          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="mt-4 text-3xl font-semibold">Add new category</h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Add category name" type="text" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea className="min-h-[100px]" id="description" placeholder="Add description" />
              </div>
              <Button className="bg-gray-800 text-white" type="submit">
                Create Category
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
