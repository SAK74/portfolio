import { ThemeOptions, createTheme } from "@mui/material";
import { deepmerge } from "@mui/utils";

export const DARK_HEADER_BACKGROUND = "#212121";

const globalOptions: ThemeOptions = {
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          // backgroundImage: "none",
        },
      },
      defaultProps: {
        elevation: 2,
      },
    },
  },
  // palette: {
  //   background: {
  //     paper: "inherit",
  //   },
  // },
};

const darkOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    background: {
      default: "#454545",
      paper: "#454545",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: DARK_HEADER_BACKGROUND,
        },
      },
    },
  },
};

const lightOptions: ThemeOptions = {
  palette: {
    background: {
      default: "#f2f2f2",
      paper: "#f2f2f2",
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

export const darkTheme = createTheme(deepmerge(globalOptions, darkOptions));
export const lightTheme = createTheme(deepmerge(globalOptions, lightOptions));
