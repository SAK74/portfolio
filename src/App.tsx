import { CssBaseline } from "@mui/material";
import { Layout } from "./pages/Layout";
import {
  Routes,
  RouteObject,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MainPage } from "./pages/MainPage";

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
      {/* <Routes>
      <Layout />
      </Routes> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
