import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#78909c",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Open Sans",
  },
});

theme = responsiveFontSizes(theme);

export default theme;
