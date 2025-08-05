import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import Layout from "./components/Layout/Layout.tsx";
import Tasks from "./pages/Tasks/Tasks.tsx";
import Settings from "./pages/Settings/Settings.tsx";
import Teams from "./pages/Teams/Teams.tsx";
import Board from "./pages/Board/Board.tsx";

const routerObject = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "/tasks", element: <Tasks /> },
      { path: "/teams", element: <Teams /> },
      { path: "/board", element: <Board /> },
    ],
  },
  { path: "/settings", element: <Settings /> },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={routerObject} />
);
