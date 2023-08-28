import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import EventDetailPage from "./pages/EventDetailPage";
import ErrorPage from "./pages/ErrorPage";
import EventSearchPage from "./pages/EventSearchPage";
import HomePage2 from "./pages/HomePage2";
import EventDetailPage2 from "./pages/EventDetailPage2";
import HomePage2white from "./pages/Homepage2white";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import RegisterPage from "./pages/RegisterPage";
import CreateEventPage from "./pages/CreateEventPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage2 /> },
      { path: "register", element: <RegisterPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "logout", element: <LogoutPage /> },
      { path: "white", element: <HomePage2white /> },
      { path: "old", element: <HomePage /> },
      { path: "events", element: <EventSearchPage /> },
      { path: "create-event", element: <CreateEventPage /> },
      { path: "old/events/:slug", element: <EventDetailPage /> },
      { path: "events/:slug", element: <EventDetailPage2 /> },
    ],
  },
]);

export default router;
