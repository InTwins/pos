interface SidebarType {
  title: string;
  children: { title: string; link: string; icon: string }[];
}

export const sidebar: SidebarType[] = [
  {
    title: "Products",
    children: [
      { title: "All Products", link: "/dashboard/products", icon: "" },
      { title: "Add Product", link: "/dashboard/products/create", icon: "" },
      { title: "Categories", link: "/dashboard/categories", icon: "" },
      { title: "Add Category", link: "/dashboard/categories/create", icon: "" },
      { title: "Brands", link: "/dashboard/brands", icon: "" },
      { title: "Add Brand", link: "/dashboard/brands/create", icon: "" },
      { title: "Units", link: "/dashboard/units", icon: "" },
      { title: "Add Unit", link: "/dashboard/units/create", icon: "" },
    ],
  },
  {
    title: "Users",
    children: [
      { title: "All Users", link: "/dashboard/users", icon: "" },
      { title: "Add User", link: "/dashboard/users/create", icon: "" },
      { title: "Roles", link: "/dashboard/roles", icon: "" },
      { title: "Add Role", link: "/dashboard/roles/create", icon: "" },
    ],
  },
  {
    title: "Sales",
    children: [
      { title: "All Sales", link: "/dashboard/sales", icon: "" },
      { title: "Create Sale", link: "/dashboard/sales/create", icon: "" },
    ],
  },
  {
    title: "People",
    children: [
      { title: "Customers", link: "/dashboard/people/customers", icon: "" },
      { title: "Suppliers", link: "/dashboard/people/suppliers", icon: "" },
    ],
  },
  {
    title: "Notifications",
    children: [
      {
        title: "All Notifications",
        link: "/dashboard/notifications",
        icon: "",
      },
    ],
  },
  {
    title: "Settings",
    children: [
      {
        title: "System Settings",
        link: "/dashboard/settings",
        icon: "",
      },
    ],
  },
  {
    title: "Reports",
    children: [
      {
        title: "Sales Report",
        link: "/dashboard/reports/sales",
        icon: "",
      },
      {
        title: "Products Report",
        link: "/dashboard/reports/products",
        icon: "",
      },
      {
        title: "Category Report",
        link: "/dashboard/reports/categories",
        icon: "",
      },
      { title: "Brands Report", link: "/dashboard/reports/brands", icon: "" },
      { title: "Monthly Report", link: "/dashboard/reports/monthly", icon: "" },
      { title: "Stock Report", link: "/dashboard/reports/stock", icon: "" },
    ],
  },
];
