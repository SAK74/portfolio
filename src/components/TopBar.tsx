import { AppBar, Toolbar, styled, IconButton } from "@mui/material";
import { FC } from "react";

export const TopBar: FC<{ changeTheme: () => void }> = ({ changeTheme }) => {
  return (
    <>
      <AppBar>
        <Toolbar>
          toolbar
          <IconButton onClick={changeTheme}>click</IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
