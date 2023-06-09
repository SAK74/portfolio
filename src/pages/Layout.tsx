import { Outlet } from "react-router-dom";
import {
  Container,
  ThemeOptions,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import { Offset, TopBar } from "components/TopBar";
import impulse from "assets/impulse.wav";
import { useSound } from "use-sound";

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
const lightTheme = createTheme({
  palette: {
    background: {
      default: "#f2f2f2",
    },
  },
});

// const play = () => {
//   new Audio(boop).play();
// };

export const Layout = () => {
  const [isDarkTheme, setDarkTheme] = useState<boolean>(true);
  const [play] = useSound(impulse, { volume: 0.5 });
  const togleTheme = () => {
    play();
    setTimeout(() => setDarkTheme((prev) => !prev), 400);
  };

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <TopBar changeTheme={togleTheme} isDarkTheme={isDarkTheme} />
        <Offset />
        <Container
          sx={(theme) => ({
            minHeight: "100vh",
            background: theme.palette.background.default,
            transition: "background .5s",
            py: 3,
          })}
          maxWidth="xl"
        >
          <Outlet />
        </Container>
      </ThemeProvider>
    </>
  );
};
