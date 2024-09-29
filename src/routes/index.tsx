import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "@/pages/admin/dashboard-admin";
import Register from "@/pages/auth/register";
import Login from "@/pages/auth/login";
import TestingApp from "@/__test__/test_app";

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
    {
      path: "/testingapp",
      element: <TestingApp />,
    },
  ]);

  return <RouterProvider router={router} />;
}
