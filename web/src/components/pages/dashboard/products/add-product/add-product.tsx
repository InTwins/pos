import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom"
import { Icons } from "@/components/icons"
import { useAddProduct } from "./add-product.hook"
import { Controller } from "react-hook-form"
import Select from "react-select"
import FileInput from "@/components/shared/file-input"

export const AddProduct = () => {
  const {
    register,
    submitHandler,
    isLoading,
    isUpdateMode,
    control,
    categoryOptions,
    brandOptions,
    unitOptions,
  } = useAddProduct()

  return (
    <div className=" h-full w-full grow items-center justify-center p-4">
      <Card>
        <CardContent>
          <Link to="/dashboard/products">
            <Button
              variant={"ghost"}
              className="mt-4 flex items-center gap-2 px-0"
            >
              <ChevronLeft /> All Products
            </Button>
          </Link>

          <div className="space-y-8">
            <form onSubmit={submitHandler}>
              <div className="space-y-2">
                <h2 className="mt-4 text-3xl font-semibold">
                  {isUpdateMode ? "Update Product" : "Add New Product"}
                </h2>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    {...register("name")}
                    id="name"
                    placeholder="Add product name"
                    type="text"
                  />
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

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                      <Select {...field} options={categoryOptions} />
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="brand">Brand</Label>
                  <Controller
                    name="brand"
                    control={control}
                    render={({ field }) => (
                      <Select {...field} options={brandOptions} />
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="unit">Unit</Label>
                  <Controller
                    name="unit"
                    control={control}
                    render={({ field }) => (
                      <Select {...field} options={unitOptions} />
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="imageUrl">Image</Label>
                  <Input
                    {...register("imageUrl")}
                    id="imageUrl"
                    placeholder="Add product image"
                    type="file"
                    accept="image/*"
                  />
                </div>

                {/* <FileInput
                  accept="image/png, image/jpg, image/jpeg, image/gif"
                  multiple
                  {...register("imageUrl")}
                /> */}

                <Button
                  className="bg-gray-800 text-white"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading && (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  {isUpdateMode ? "Update Product" : "Add Product"}
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
