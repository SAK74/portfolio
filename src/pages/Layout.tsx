import { Outlet } from "react-router-dom";
import { Container, AppBar, Toolbar, styled } from "@mui/material";
// import { footerHeight } from "../_constants";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const Layout = () => {
  return (
    <>
      {/* <header>Header</header> */}
      <AppBar>
        <Toolbar>toolbar</Toolbar>
      </AppBar>
      <Offset />
      <Container sx={(theme) => ({ minHeight: `calc(100vh)` })}>
        <Outlet />
      </Container>
      {/* <footer>Footer</footer> */}
    </>
  );
};
