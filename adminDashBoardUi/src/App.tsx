import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
const DashBoard = lazy(() => import("./pages/DashBoard"));
const Products = lazy(() => import("./pages/Products"));
const Customer = lazy(() => import("./pages/Customer"));
const Transaction = lazy(() => import("./pages/Transaction"));


const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/customers",
    element: <Customer />,
  },
  {
    path: "/transactions",
    element: <Transaction />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
