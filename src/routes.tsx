import type { RouteObject } from "react-router-dom";
import { Layout } from "pages";
import { lazy, Suspense } from "react";
import { CircularProgress } from "@mui/material";

const MainPage = lazy(() =>
  import("pages/MainPage").then((m) => ({ default: m.MainPage }))
);
const SkillsPage = lazy(() =>
  import("pages/Skills").then((m) => ({ default: m.SkillsPage }))
);
const Projects = lazy(() =>
  import("pages/Projects").then((m) => ({ default: m.Projects }))
);
const Contact = lazy(() =>
  import("pages/Contact").then((m) => ({ default: m.Contact }))
);

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: (
          <Suspense fallback={<CircularProgress />}>
            <MainPage />
          </Suspense>
        ),
        index: true,
      },
      {
        path: "skils",
        element: (
          <Suspense fallback={<CircularProgress />}>
            <SkillsPage />
          </Suspense>
        ),
      },
      {
        path: "projects",
        element: (
          <Suspense fallback={<CircularProgress />}>
            <Projects />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<CircularProgress />}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
];
