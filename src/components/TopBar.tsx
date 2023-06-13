import { AppBar, Toolbar, styled, Grid } from "@mui/material";
import { FC, MouseEvent } from "react";
import { NavLink } from "react-router-dom";
import { useSound } from "use-sound";
import boop from "assets/sounds/switch-off.wav";
import { useRootCtx } from "./RootProvider";
import { ControlComponent } from "./Control";
import { useTranslation } from "react-i18next";
import "./topBar.css";

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
              sx={{ justifyContent: "flex-end", gap: "1rem", pr: 1 }}
              container
            >
              <NavLink to="/" onClick={clickLink}>
                {t("topBar.links.about")}
              </NavLink>
              <NavLink to="/skils" onClick={clickLink}>
                {t("topBar.links.skills")}
              </NavLink>
              <NavLink to="/projects" onClick={clickLink}>
                {t("topBar.links.projects")}
              </NavLink>
              <NavLink to="/contact" onClick={clickLink}>
                {t("topBar.links.contact")}
              </NavLink>
            </Grid>
            <Grid item>
              <ControlComponent {...{ changeTheme, isDarkTheme }} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
