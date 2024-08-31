import { CssBaseline } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { routes } from "routes";

const router = createBrowserRouter(routes, {
  basename: "/portfolio",
});

function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} fallbackElement={<CircularProgress />} />
    </>
  );
}

export default App;
