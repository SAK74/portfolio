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
        path: "home",
        element: <MainPage />,
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
