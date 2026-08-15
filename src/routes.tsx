import { createBrowserRouter } from "react-router";
import Root from "./root";

import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthLayout from "./layouts/AuthLayout";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, path: "/", element: <HomePage /> },
    ],
  },
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: false, path: "/login", element: <Login />},
      {index: false, path: "/register", element: <Register />},
    ]
  },
  { path: "*", element: <ErrorPage /> },
]);

export default router;