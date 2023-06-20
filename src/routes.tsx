import { RouteObject } from "react-router-dom";
import { Layout, MainPage, SkillsPage, Projects, Contact } from "pages";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
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
