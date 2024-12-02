/** @type {import('tailwindcss').Config} */

import type { Config } from "tailwindcss";
import {
  colors,
  white,
  black,
  currentColor,
  transparent,
} from "./src/tokens/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", "[data-mode='dark']"],
  theme: {
    colors: {
      ...colors,
      white,
      black,
      transparent,
      currentColor,
    },
    extend: {
      fontFamily: {
        serif: ["Roboto Slab Variable", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
