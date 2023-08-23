import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import EventDetailPage from "./pages/EventDetailPage";
import ErrorPage from "./pages/ErrorPage";
import EventSearchPage from "./pages/EventSearchPage";
import HomePage2 from "./pages/HomePage2";
import EventDetailPage2 from "./pages/EventDetailPage2";
import HomePage2white from "./pages/Homepage2white";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage2 /> },
      { path: "white", element: <HomePage2white /> },
      { path: "old", element: <HomePage /> },
      { path: "events", element: <EventSearchPage /> },
      { path: "old/events/:slug", element: <EventDetailPage /> },
      { path: "events/:slug", element: <EventDetailPage2 /> },
    ],
  },
]);

export default router;
