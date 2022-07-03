import { PaletteOptions, SimplePaletteColorOptions } from '@mui/material';

interface DefaultPaletteOptions extends PaletteOptions {
  primary: SimplePaletteColorOptions;
  secondary: SimplePaletteColorOptions;
  error: SimplePaletteColorOptions;
  warning: SimplePaletteColorOptions;
  info: SimplePaletteColorOptions;
  success: SimplePaletteColorOptions;
}

const palette: DefaultPaletteOptions = {
  primary: {
    light: '#FFFFFF', main: '#F9F9F9', dark: '#3F2C65', contrastText: '#E8E5E5',
  },
  secondary: {
    main: '#05FF32', light: '#DD6E64', dark: '#F27CAC', contrastText: '#2d4c54',
  },
  error: {
    main: '#DB521F', light: '#ffe9e9', dark: 'rgb(95, 33, 32)', contrastText: 'rgb(253, 237, 237)',
  },
  warning: {
    main: '#f4d670', light: '#fcf5db', dark: '#a93b31', contrastText: '#65929B',
  },
  info: {
    main: '#101113', dark: '#659296', light: '#9499a1', contrastText: '#2c2e2f',
  },
  success: {
    main: '#38b241', light: '#F2F6FF', dark: '#23233C', contrastText: '#FAAD14',
  },
  text: {
    primary: '#0D0D0D',
    secondary: '#343A40',
    disabled: '#A4A4A4',
  },
  divider: '#4d4c52',
};

export default palette;
