import { ComponentsOverrides } from "@mui/material/styles";

import PoppinsBlack from "../assets/fonts/Poppins/Poppins-Black.ttf";
import PoppinsBlackItalic from "../assets/fonts/Poppins/Poppins-BlackItalic.ttf";
import PoppinsBold from "../assets/fonts/Poppins/Poppins-Bold.ttf";
import PoppinsBoldItalic from "../assets/fonts/Poppins/Poppins-BoldItalic.ttf";
import PoppinsItalic from "../assets/fonts/Poppins/Poppins-Italic.ttf";
import PoppinsLight from "../assets/fonts/Poppins/Poppins-Light.ttf";
import PoppinsLightItalic from "../assets/fonts/Poppins/Poppins-LightItalic.ttf";
import PoppinsMedium from "../assets/fonts/Poppins/Poppins-Medium.ttf";
import PoppinsMediumItalic from "../assets/fonts/Poppins/Poppins-MediumItalic.ttf";
import PoppinsRegular from "../assets/fonts/Poppins/Poppins-Regular.ttf";
import PoppinsThin from "../assets/fonts/Poppins/Poppins-Thin.ttf";
import PoppinsThinItalic from "../assets/fonts/Poppins/Poppins-ThinItalic.ttf";

export const createGlobalOverrides = (): ComponentsOverrides => ({
  MuiCssBaseline: {
    styleOverrides: `
      @font-face {
        font-family: 'Poppins';
        src: url('${PoppinsRegular}') format('ttf');
        font-weight: 400;
      }

      @font-face {
        font-family: 'Poppins';
        src: url('${PoppinsItalic}') format('ttf');
        font-weight: 400;
        font-style: 'italic';
      }

      @font-face {
        font-family: 'Poppins';
        src: url('${PoppinsThin}') format('ttf');
        font-weight: 100;
      }

      @font-face {
        font-family: 'Poppins';
        src: url('${PoppinsThinItalic}') format('ttf');
        font-weight: 100;
        font-style: 'italic';
      }

      @font-face {
        font-family: 'Poppins';
        src: url('${PoppinsLight}') format('ttf');
        font-weight: 300;
      }

      @font-face {
        font-family: 'Poppins';
        src: url('${PoppinsLightItalic}') format('ttf');
        font-weight: 300;
        font-style: 'italic';
      }

      @font-face {
        font-family: 'Poppins';
        src: url('${PoppinsMedium}') format('ttf');
        font-weight: 500;
      }

      @font-face {
        font-family: 'Poppins';
        src: url('${PoppinsMediumItalic}') format('ttf');
        font-weight: 500;
        font-style: 'italic';
      }

      @font-face {
        font-family: 'Poppins';
        src: url('${PoppinsBold}') format('ttf');
        font-weight: 700;
      }

      @font-face {
        font-family: 'Poppins';
        src: url('${PoppinsBoldItalic}') format('ttf');
        font-weight: 700;
        font-style: 'italic';
      }

      @font-face {
        font-family: 'Poppins';
        src: url('${PoppinsBlack}') format('ttf');
        font-weight: 900;
      }

      @font-face {
        font-family: 'Poppins';
        src: url('${PoppinsBlackItalic}') format('ttf');
        font-weight: 900;
        font-style: 'italic';
      }
    `,
  },
});
