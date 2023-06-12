import { Stack, IconButton, Menu, MenuItem } from "@mui/material";
import {
  Nightlight,
  LightModeOutlined as LightIcon,
  VolumeOff,
  VolumeUp,
} from "@mui/icons-material";
import CountryFlag from "react-svg-country-flags";
import { FC, useState, MouseEventHandler } from "react";
import { useRootCtx } from "./RootProvider";
import { useSound } from "use-sound";

import switchOn from "assets/sounds/switch_on.wav";

const Flag: FC<{ country: string }> = ({ country }) => (
  <CountryFlag country={country === "en" ? "gb" : country} />
);

export const ControlComponent: FC<{
  changeTheme: () => void;
  isDarkTheme: boolean;
}> = ({ changeTheme, isDarkTheme }) => {
  const { onSound, setOnSound } = useRootCtx();
  const [playSound] = useSound(switchOn, { volume: 0.5 });
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
  const [lang, setLang] = useState("en");
  const langClick = (lng: string) => {
    setLang(lng);
    setAnchor(null);
  };

  const languages = ["en", "pl"];
  return (
    <>
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
