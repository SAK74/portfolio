import { RouteObject } from "react-router-dom";
import { Layout, MainPage, Skils, Projects, Contact } from "pages";

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
        element: <Skils />,
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
