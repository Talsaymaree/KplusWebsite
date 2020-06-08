import { createGlobalStyle } from "styled-components"
import { createMuiTheme } from "@material-ui/core";

const textColor = '#9ca8b0';

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
      main: '#131722',
      contrastText: textColor
    },
    secondary: {
      main: '#ff1744',
      contrastText: textColor
    },
    background: {
      paper: '#0c101b',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    text: {
      primary: textColor,
      secondary: '#ff1744'
    }
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
  }
});

// main background: #131722
// second background: #0c101b
// accent: #ff1744

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${theme.palette.primary.main};
    color: ${textColor};
  }
`
