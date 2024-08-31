import { RouteObject } from "react-router-dom";
import { Layout, MainPage, SkillsPage, Projects, Contact } from "pages";
import { RootBoundary } from "pages/RootBoundary";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <RootBoundary />,
    children: [
      {
        element: <MainPage />,
        index: true,
      },
      {
        path: "skils",
        element: <SkillsPage />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
];
