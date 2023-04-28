import { createTheme } from "@mui/material";

export const themeOptions = createTheme({
  palette: {
    primary: {
      main: "#f4976c",
    },
    secondary: {
      main: "#6cc9f4",
    },
    warning: {
      main: "#f4db6c",
    },
    info: {
      main: "#c9f46c",
    },
    success: {
      main: "#00e866",
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});
