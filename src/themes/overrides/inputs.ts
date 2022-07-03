import { ComponentsOverrides } from '@mui/material/styles/overrides';
import palette from '../palette';
import { Components } from '@mui/material/styles/components';
import theme from '../default';

const inputs: Components<ComponentsOverrides> = {
  MuiButton: {
    styleOverrides: {
      root: {
        fontSize: '16px',
        textTransform: 'none',
      },
    },
    variants: [
      {
        props: {
          variant: 'contained',
        },
        style: {
          border: 0,
          borderRadius: 8,
          background: 'red',
          color: palette.primary.light,
          fontWeight: 400,
          boxShadow: 'none',
          '&:hover': {
            background: palette.warning.dark, // a93b31
          },
        },
      },
      {
        props: {
          variant: 'outlined',
        },
        style: {
          fontSize: 16,
          lineHeight: 3.25,
          textTransform: 'capitalize',
          border: 0,
          borderRadius: 4,
          background: palette.warning.contrastText, // #65929B
          color: palette.primary.light, // #FFFFFF
          '&:hover': {
            background: palette.secondary.contrastText, // #2d4c54
          },
        },
      },
      {
        props: {
          size: 'large',
        },
        style: {
          [theme.breakpoints.up('xs')]: {
            minWidth: 236,
            height: 56,
            fontSize: 18,
            lineHeight: '26px',
          },
          [theme.breakpoints.up('sm')]: {
            minWidth: 64,
            height: 48,
            paddingInline: 32,
            fontSize: 16,
            lineHeight: '26px',
          },
          [theme.breakpoints.up('md')]: {
            minWidth: 304,
            height: 56,
            fontSize: 18,
            lineHeight: '26px',
          },
        },
      },
    ],
  },
};

export default inputs;
