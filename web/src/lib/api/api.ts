export class Api {
  baseUrl = "http://localhost:4000/api/v1"
  method = "GET"
  fetchOptions: RequestInit = {
    method: this.method,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    mode: "cors",
  }

  constructor(route: string) {
    this.baseUrl = this.baseUrl + route
    return this
  }
  get = async (path: string = "") => {
    this.method = "GET"
    const response = await fetch(`${this.baseUrl}${path ? "/" + path : ""}`, this.fetchOptions)
    return response.json()
  }

  post = async (data: object, path: string = "") => {
    this.fetchOptions.body = JSON.stringify(data)
    const response = await fetch(`${this.baseUrl}${path ? "/" + path : ""}`, {
      ...this.fetchOptions,
      method: "POST",
    })
    return response.json()
  }
}
