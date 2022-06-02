import { extendTheme, Theme } from "@chakra-ui/react";

const customTheme = {
  config: {
    // change to system before push
    initialColorMode: "dark",
  },
  colors: {
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2",
    },
    pink: {
      "200": "#D53F8C",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      "html, body": {
        color: "gray.50",
        bg: "gray.900",
      },
    },
  },
};

export const theme = extendTheme(customTheme);
