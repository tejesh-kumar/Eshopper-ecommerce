import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1140,
      xl: 1920
    }
  },
  palette: {
    primary: {
      main: '#fe980f',
    },
    secondary: {
      main: '#F0F0E9'
    },
    tertiary: {
      main: '#40403e'
    },
    text: {
        primary: '#696763',
        secondary: '#363432',
        tertiary: '#b3afa8',
        orange: '#fe980f',
        footerHeading: '#666663',
        footerBody: '#8C8C88',
    }
  },
  typography: {
    body1: {
      
    }
  }
});

export default theme;