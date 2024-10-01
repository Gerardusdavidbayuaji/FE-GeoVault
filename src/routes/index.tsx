import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "@/pages/admin/dashboard-admin";
import Register from "@/pages/auth/register";
import Login from "@/pages/auth/login";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);

  return <RouterProvider router={router} />;
}
