import { CssBaseline } from "@mui/material";
import { Layout } from "./pages/Layout";
import {
  RouteObject,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { CircularProgress } from "@mui/material";

const routes: RouteObject[] = [
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
        element: <div>Skils</div>,
      },
      {
        path: "projects",
        element: <div>Projects</div>,
      },
      {
        path: "contact",
        element: <div>Contact</div>,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} fallbackElement={<CircularProgress />} />
    </>
  );
}

export default App;
