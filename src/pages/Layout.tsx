import { Outlet } from "react-router-dom";
import {
  Container,
  ThemeOptions,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import { Offset, TopBar } from "../components/TopBar";

const darkOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    background: {
      default: "#202020",
      paper: "#212121",
    },
  },
};

const darkTheme = createTheme(darkOptions);
const lightTheme = createTheme({});

export const Layout = () => {
  const [isDarkTheme, setDarkTheme] = useState<boolean>(true);
  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <TopBar changeTheme={() => setDarkTheme((prev) => !prev)} />
        <Offset />
        <Container
          sx={(theme) => ({
            minHeight: "100vh",
            background: theme.palette.background.default,
          })}
          maxWidth="xl"
        >
          <Outlet />
        </Container>
      </ThemeProvider>
    </>
  );
};
