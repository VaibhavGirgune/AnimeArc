import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import { Spin } from "antd";

// Lazy Pages
const Home = lazy(() => import("../pages/Home/Home"));
const Anime = lazy(() => import("../pages/Anime/Anime"));
const Manga = lazy(() => import("../pages/Manga/Manga"));
const NotFound = lazy(() => import("../pages/NotFound"));

const loader = (
  <div style={{ display: "flex", justifyContent: "center", paddingTop: 50 }}>
    <Spin size="large" />
  </div>
);

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={loader}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "Manga",
        element: (
          <Suspense fallback={loader}>
            <Manga />
          </Suspense>
        ),
      },
      {
        path: "Anime",
        element: (
          <Suspense fallback={loader}>
            <Anime />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={loader}>
        <NotFound />
      </Suspense>
    ),
  },
]);

export default AppRoutes;
