import {
  AppBar,
  Toolbar,
  styled,
  IconButton,
  Grid,
  Stack,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Nightlight,
  LightModeOutlined as LightIcon,
  VolumeUp,
  VolumeOff,
} from "@mui/icons-material";
import { FC, MouseEvent, MouseEventHandler, useState } from "react";
import { NavLink } from "react-router-dom";
import "./topBar.css";
import { useSound } from "use-sound";
import boop from "assets/sounds/switch-off.wav";
import switchOn from "assets/sounds/switch_on.wav";
import { useRootCtx } from "./RootProvider";
import CountryFlag from "react-svg-country-flags";

const Flag: FC<{ country: string }> = ({ country }) => (
  <CountryFlag country={country === "en" ? "gb" : country} />
);

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

  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const langMenuClick: MouseEventHandler<HTMLButtonElement> = ({
    currentTarget,
  }) => {
    setAnchor(currentTarget);
  };

  const [lang, setLang] = useState("pl");
  const langClick = (lng: string) => {
    setLang(lng);
    setAnchor(null);
  };
  const languages = ["en", "pl"];
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
                <IconButton onClick={langMenuClick}>
                  <Flag country={lang} />
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Menu open={!!anchor} onClose={() => setAnchor(null)} anchorEl={anchor}>
        {languages.map((lng) => {
          if (lng === lang) {
            return null;
          } else {
            return (
              <MenuItem key={lng} onClick={() => langClick(lng)}>
                <Flag country={lng} />
              </MenuItem>
            );
          }
        })}
      </Menu>
    </>
  );
};

export const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
