import { Outlet } from "react-router-dom";
import { Container, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Offset, TopBar } from "components/topBar/TopBar";
import click from "assets/sounds/cliiick.wav";
import { useSound } from "use-sound";
import { darkTheme, lightTheme } from "themes";
import { RootProvider } from "components/RootProvider";

// const play = () => {
//   new Audio(boop).play();
// };

export const Layout = () => {
  const [isDarkTheme, setDarkTheme] = useState<boolean>(true);
  const [onSound, setOnSound] = useState<boolean>(true);
  const [play] = useSound(click, { volume: 0.5 });
  const togleTheme = () => {
    play();
    setTimeout(() => setDarkTheme((prev) => !prev), 400);
  };

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <RootProvider value={{ onSound, setOnSound }}>
          <TopBar changeTheme={togleTheme} isDarkTheme={isDarkTheme} />
          <Offset />
          <Container
            sx={(theme) => ({
              minHeight: "100vh",
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              transition: "background .5s",
              py: 3,
            })}
            maxWidth="xl"
          >
            <Outlet />
          </Container>
        </RootProvider>
      </ThemeProvider>
    </>
  );
};
