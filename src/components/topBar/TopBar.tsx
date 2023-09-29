import {
  AppBar,
  Toolbar,
  styled,
  Grid,
  useMediaQuery,
  Theme,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { FC, MouseEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSound } from "use-sound";
import boop from "assets/sounds/switch-off.wav";
import { useRootCtx } from "../RootProvider";
import { ControlComponent } from "./Control";
import { useTranslation } from "react-i18next";
import "./topBar.css";
import { Menu as MenuIcon } from "@mui/icons-material";
import { GetCV } from "./GetCV";

const naviLinks = ["about", "skils", "projects", "contact"] as const;

export const TopBar: FC<{ changeTheme: () => void; isDarkTheme: boolean }> = ({
  changeTheme,
  isDarkTheme,
}) => {
  const { onSound } = useRootCtx();
  const [playLink] = useSound(boop, { volume: 0.5 });
  const { t } = useTranslation();

  const clickLink = ({ currentTarget }: MouseEvent<HTMLAnchorElement>) => {
    if (onSound && !currentTarget.classList.contains("active")) {
      playLink();
    }
  };

  const isSmall: boolean = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("md")
  );

  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const renderedLinks = naviLinks.map((link) => (
    <NavLink key={link} to={link === "about" ? "/" : link} onClick={clickLink}>
      {t(`topBar.links.${link}`)}
    </NavLink>
  ));
  renderedLinks.push(<GetCV key="resume" />);

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
              {t("topBar.invite")}
            </Grid>
            <Grid
              component={"nav"}
              item
              xs={10}
              sx={{
                justifyContent: "flex-end",
                alignItems: "baseline",
                gap: "1rem",
                pr: 1,
              }}
              container
            >
              {!isSmall ? (
                renderedLinks
              ) : (
                <IconButton
                  onClick={({ currentTarget }) => {
                    setMenuAnchor(currentTarget);
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Grid>
            <Grid item>
              <ControlComponent {...{ changeTheme, isDarkTheme }} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Menu
        open={Boolean(menuAnchor)}
        anchorEl={menuAnchor}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setMenuAnchor(null)}
      >
        {renderedLinks.map((link) => (
          <MenuItem key={link.key}>{link}</MenuItem>
        ))}
      </Menu>
    </>
  );
};

export const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
