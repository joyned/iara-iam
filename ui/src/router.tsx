import { createBrowserRouter, Navigate } from "react-router";
import Layout from "./layout/Layout";
import UserPage from "./pages/user/UserPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Navigate to={"/user"} />,
      },
      {
        path: "user",
        element: <UserPage />,
      },
    ],
  },
]);

export { router };
