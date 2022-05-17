import { createTheme } from '@mui/material/styles';
import { createGlobalOverrides } from './global';

export let theme = createTheme({
  palette: {
    accent: {
      lightest: '#D3ACF2',
      lighter: '#8D83EB',
      light: '#A759E5',
      main: '#9130DE',
      dark: '#742682',
      darker: '#571D85',
      darkest: '#3A1359',
      contrastText: '#fff'
    }
  }
});

theme = createTheme(theme, {
  typography: {
    fontSize: 10,
    htmlFontSize: 10,
    fontFamily: ['Poppins', 'sans-serif'].join(',')
  },
  components: {
    ...createGlobalOverrides(),
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          border: 'none',
          boxShadow: 'none',
          borderRadius: 8,
          height: '48px',
          fontSize: '16px',
          fontFamily: 'Poppins',
          padding: '12px 32px',
          fontWeight: 400
        }
      }
    }
  }
});

declare module '@mui/material/styles' {
  interface PaletteColor {
    darkest?: string;
    darker?: string;
    dark: string;
    main: string;
    light: string;
    lighter?: string;
    lightest?: string;
    contrastText: string;
  }

  interface PaletteColorOptions {
    darkest?: string;
    darker?: string;
    dark: string;
    main: string;
    light: string;
    lighter?: string;
    lightest?: string;
    contrastText: string;
  }

  interface Palette {
    accent: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    accent: true;
  }
}
