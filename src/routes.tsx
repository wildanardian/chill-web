import { createBrowserRouter } from "react-router";
import Root from "./root";

import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import GuestLayout from "./layouts/GuestLayout";
import FilmPage from "./pages/FilmPage";
import SeriesPage from "./pages/SeriesPage";
import MyListPage from "./pages/MyListPage";
import ProfilePage from "./pages/ProfilePage";
import SubscriptionPlan from "./pages/SubscriptionPlan";
import PaymentPage from "./pages/PaymentPage";
import PaymentProcessPage from "./pages/PaymentProcessPage";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, path: "/", element: <HomePage /> },
      { index: true, path: "/film", element: <FilmPage /> },
      { index: true, path: "/series", element: <SeriesPage /> },
      { index: true, path: "/daftar-saya", element: <MyListPage /> },
      { index: true, path: "/profile", element: <ProfilePage /> },
      { index: true, path: "/subscription-plan", element: <SubscriptionPlan /> },
      { index: true, path: "/payment", element: <PaymentPage /> },
      { index: true, path: "/payment-process", element: <PaymentProcessPage /> }
    ],
  },
  {
    element: <GuestLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: false, path: "/login", element: <Login /> },
      { index: false, path: "/register", element: <Register /> },
    ]
  },
  { path: "*", element: <ErrorPage /> },
]);

export default router;
