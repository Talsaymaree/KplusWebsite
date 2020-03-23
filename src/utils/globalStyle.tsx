import { createGlobalStyle } from "styled-components"
import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        fontWeight: "bold",
        backgroundColor: "red",
        margin: "10px",
        "&:hover": {
          backgroundColor: "green"
        }
      }
    }
  },
  palette: {
    primary: {
      light: '#3F4855',
      main: '#222831',
      dark: '#0D1624',
      contrastText: '#fff',
    },
    secondary: {
      light: '#00F3FF',
      main: '#00adb5',
      dark: '#00656A',
      contrastText: '#0D1624',
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: [
      'Roboto',
      '-apple-system',
      'archivo narrow',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: 'h2',
        h2: 'h2',
        h3: 'h2',
        h4: 'h2',
        h5: 'h2',
        h6: 'h2',
        subtitle1: 'h2',
        subtitle2: 'h2',
        body1: 'span',
        body2: 'span',
      },
    },
  },
});

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.theme === "purple" ? theme.palette.primary.light : "white")};
  }
`
