import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import EventDetailPage from "./pages/EventDetailPage";
import ErrorPage from "./pages/ErrorPage";
import EventSearchPage from "./pages/EventSearchPage";
import HomePage2 from "./pages/HomePage2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage2 /> },
      { path: "old", element: <HomePage /> },
      { path: "events", element: <EventSearchPage /> },
      { path: "events/:slug", element: <EventDetailPage /> },
    ],
  },
]);

export default router;
