import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import Layout from "./components/Layout/Layout.tsx";
import Customers from "./pages/Customers/Customers.tsx";
import Settings from "./pages/Settings/Settings.tsx";

const routerObject = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "/customers", element: <Customers /> },
    ],
  },
  { path: "/settings", element: <Settings /> },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={routerObject} />
);
