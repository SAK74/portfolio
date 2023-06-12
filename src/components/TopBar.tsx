import {
  AppBar,
  Toolbar,
  styled,
  IconButton,
  Grid,
  Stack,
} from "@mui/material";
import {
  Nightlight,
  LightModeOutlined as LightIcon,
  VolumeUp,
  VolumeOff,
} from "@mui/icons-material";
import { FC, MouseEvent } from "react";
import { NavLink } from "react-router-dom";
import "./topBar.css";
import { useSound } from "use-sound";
import boop from "assets/sounds/switch-off.wav";
import switchOn from "assets/sounds/switch_on.wav";
import { useRootCtx } from "./RootProvider";

export const TopBar: FC<{ changeTheme: () => void; isDarkTheme: boolean }> = ({
  changeTheme,
  isDarkTheme,
}) => {
  const { onSound, setOnSound } = useRootCtx();
  const [playLink] = useSound(boop, { volume: 0.5 });
  const [playSound] = useSound(switchOn, { volume: 0.5 });
  const clickLink = ({ currentTarget }: MouseEvent<HTMLAnchorElement>) => {
    if (onSound && !currentTarget.classList.contains("active")) {
      playLink();
    }
  };
  const togleSound = () => {
    if (!onSound) {
      playSound();
    }
    setOnSound((prev) => !prev);
  };
  return (
    <>
      <AppBar>
        <Toolbar>
          <Grid
            container
            sx={{ justifyContent: "space-between", alignItems: "center" }}
            wrap="nowrap"
            spacing={2}
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
              <Stack direction="row">
                <IconButton onClick={changeTheme}>
                  {isDarkTheme ? <Nightlight /> : <LightIcon />}
                </IconButton>
                <IconButton onClick={togleSound}>
                  {!onSound ? <VolumeOff /> : <VolumeUp />}
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
