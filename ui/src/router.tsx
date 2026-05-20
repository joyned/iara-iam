import { createBrowserRouter } from "react-router";
import Layout from "./layout/Layout";
import UserPage from "./pages/user/UserPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "user",
        element: <UserPage />,
      },
    ],
  },
]);

export { router };
