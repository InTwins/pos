export type Product = {
  id: string
  name: string
  description: string
  imageUrl: string
  brandId: string
  unitId: string
  categoryId: string
  createdAt: string
  updatedAt: string

  brand: {
    name: string
  }
  category: {
    name: string
  }
  unit: {
    name: string
  }
}
