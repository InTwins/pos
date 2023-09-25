import { Api } from "./api"

const BrandApi = new Api("/brands")

export const getBrands = async () => {
  return await BrandApi.get()
}

// export const getBrand = async (id: string) => {
//   return await BrandApi.get(id)
// }

export const createBrand = async (data: object) => {
  return await BrandApi.post(data)
}
