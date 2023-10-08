import { DashboardPage } from "@/pages/dashboard"
import { ErrorPage } from "@/pages/error"
import { SignInPage } from "@/pages/signin"
import { SignUpPage } from "@/pages/signup"
import { WelcomePage } from "@/pages/welcome"
import { createBrowserRouter } from "react-router-dom"
import { Overview } from "@/components/pages/dashboard/overview"
import { SettingsLayout } from "@/components/pages/dashboard/settings"
import { AllBrands } from "@/components/pages/dashboard/brands/all-brands"
import { AllCategories } from "@/components/pages/dashboard/categories/all-categories"
// import { AllProducts } from "@/components/pages/dashboard/products/all-products"
import { AllProducts } from "@/components/pages/dashboard/products/all-products"
import { AllUnits } from "@/components/pages/dashboard/units/all-units"
import { AddCategory } from "@/components/pages/dashboard/categories/add-category"
import { AddProduct } from "@/components/pages/dashboard/products/add-product"
// import { AddProduct } from "@/components/pages/dashboard/products/add-product"
import { AddUnit } from "@/components/pages/dashboard/units/add-unit"
import { AddBrand } from "@/components/pages/dashboard/brands/add-brand"
import { PrivateRoute } from "@/components/private-route"
import { PublicRoute } from "@/components/public-route"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute />,
    children: [
      {
        path: "",
        element: <WelcomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "signin",
        element: <SignInPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute />,
    children: [
      {
        path: "",
        element: <DashboardPage />,
        children: [
          {
            path: "",
            element: <Overview />,
          },
          {
            path: "brands",
            element: <AllBrands />,
          },

          {
            path: "brands/create",
            element: <AddBrand />,
          },
          {
            path: "brands/update",
            element: <AddBrand />,
          },
          {
            path: "categories",
            element: <AllCategories />,
          },
          {
            path: "categories/create",
            element: <AddCategory />,
          },
          {
            path: "categories/update",
            element: <AddCategory />,
          },
          {
            path: "products",
            element: <AllProducts />,
          },
          {
            path: "products/create",
            element: <AddProduct />,
          },

          {
            path: "products/update",
            element: <AddProduct />,
          },

          {
            path: "units",
            element: <AllUnits />,
          },
          {
            path: "units/create",
            element: <AddUnit />,
          },
          {
            path: "units/update",
            element: <AddUnit />,
          },
          {
            path: "settings",
            element: <SettingsLayout />,
          },
          {
            path: "*",
            element: <div>Oops! Route not found!</div>,
          },
        ],
      },
    ],
  },
])
