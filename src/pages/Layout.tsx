import { Outlet } from "react-router-dom";
import { Container, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Offset, TopBar } from "components/topBar/TopBar";
import click from "assets/sounds/cliiick.wav";
import { useSound } from "use-sound";
import { darkTheme, lightTheme } from "themes";
import { RootProvider } from "components/RootProvider";
import { Footer } from "components/Footer";

const sysAgent = window.matchMedia("(prefers-color-scheme:dark)");

export const Layout = () => {
  const [isDarkTheme, setDarkTheme] = useState<boolean>(sysAgent.matches);
  const [onSound, setOnSound] = useState<boolean>(true);
  const [play] = useSound(click, { volume: 0.5 });
  const togleTheme = () => {
    if (onSound) {
      play();
    }
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
              minHeight: "calc(100vh - 6.5rem)",
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              transition: "background .5s",
              py: 5,
            })}
            maxWidth="xl"
          >
            <Outlet />
          </Container>
        </RootProvider>
        <Footer />
      </ThemeProvider>
    </>
  );
};
