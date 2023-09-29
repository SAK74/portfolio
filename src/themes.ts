import { ThemeOptions, createTheme } from "@mui/material";

const darkOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    background: {
      default: "#202020",
      paper: "#212121",
    },
  },
};

const lightOptions: ThemeOptions = {
  palette: {
    background: {
      default: "#f2f2f2",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "inherit",
        },
      },
    },
  },
};

export const darkTheme = createTheme(darkOptions);
export const lightTheme = createTheme(lightOptions);
