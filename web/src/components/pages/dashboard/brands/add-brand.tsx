import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const AddBrand = () => {
  return (
    <div className=" items-center justify-center p-4 h-full w-full grow">
      <Card>
        <CardContent>
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl mt-4 font-semibold">Add new brand</h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Add category name" type="text" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  className="min-h-[100px]"
                  id="description"
                  placeholder="Add description"
                />
              </div>
              <Button className="bg-gray-800 text-white" type="submit">
                Create Brand
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
