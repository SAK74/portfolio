import { AppBar, Toolbar, styled, IconButton, Grid } from "@mui/material";
import {
  Nightlight,
  LightModeOutlined as LightIcon,
} from "@mui/icons-material";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./topBar.css";
import { useSound } from "use-sound";
import boop from "assets/switch-off.wav";

export const TopBar: FC<{ changeTheme: () => void; isDarkTheme: boolean }> = ({
  changeTheme,
  isDarkTheme,
}) => {
  const [play] = useSound(boop, { volume: 0.5 });
  const clickLink = () => {
    play();
  };
  return (
    <>
      <AppBar>
        <Toolbar>
          <Grid
            container
            sx={{ justifyContent: "space-between", alignItems: "center" }}
            wrap="nowrap"
          >
            <Grid item sx={{ letterSpacing: ".5rem", fontSize: "1.5rem" }}>
              Welcome
            </Grid>
            <Grid
              component={"nav"}
              item
              xs={10}
              sx={{ justifyContent: "flex-end", gap: "1rem", pr: 1 }}
              container
            >
              <NavLink to="/" onClick={clickLink}>
                About
              </NavLink>
              <NavLink to="/skils" onClick={clickLink}>
                Skils
              </NavLink>
              <NavLink to="/projects" onClick={clickLink}>
                Projects
              </NavLink>
              <NavLink to="/contact" onClick={clickLink}>
                Contact
              </NavLink>
            </Grid>
            <Grid item>
              <IconButton onClick={changeTheme}>
                {isDarkTheme ? <Nightlight /> : <LightIcon />}
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
