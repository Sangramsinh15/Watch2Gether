import { createTheme } from "@mui/material/styles";
/**
 * configuration of the theme
 */
const themeOptions = {
  // palette: {
  //   type: "dark",
  //   primary: {
  //     main: "#fdd835",
  //     contrastText: "#212121",
  //   },
  //   secondary: {
  //     main: "#F06292",
  //   },
  //   background: {
  //     default: "#2b282a",
  //   },
  // },
  palette: {
    mode: "dark",
    primary: {
      main: "#9575cd",
      light: "#c7a4ff",
      dark: "##65499c",
    },
    secondary: {
      main: "#4fc3f7",
      light: "#8bf6ff",
      dark: "#0093c4",
    },
    neutral: {
      main: "#ad1457",
      contrastText: "#fff",
    },
  },
  components: {
    // Name of the component
    MuiBox: {
      styleOverrides: {
        // Name of the slot
        root: {
          borderColor: "#9575cd",
          border:1,
          borderRadius:1,
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
