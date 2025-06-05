import type { Config } from "tailwindcss";

import { screenBreakPoints } from "./src/config/screen-breakpoints";

const coreUIConfig = require("@babylonlabs-io/core-ui/tailwind");

const config: Config = {
  presets: [coreUIConfig],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: screenBreakPoints,
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        surface: {
          DEFAULT: "rgba(64, 64, 64, 0.3)",
        },
        "primary-main": "#111111",
        "primary-dark": "#e66411",
        "primary-light": "#f5be37",
        "primary-contrast": "#FFFFFF",
        "secondary-main": "#f5be37",
        "secondary-highlight": "#212121",
        "accent-primary": "#FFFFFF",
        "accent-secondary": "#FFFFFF",

        "es-text": "#FFFFFF",
        "es-bg": "#111111",
        "es-black": "#000000",
        "es-accent": "#F5BE37",
        "es-text-secondary": "#b2b2b2",
        "es-secondary-2": "#212121",
        "es-border": "#5B5B5B",
        "es-text-hint": "#828282",
        "es-error": "#FF5353",
        "es-success-light": "rgba(187, 255, 155, 0.6)",
        "es-success": "#BBFF9B",
      },
      backgroundImage: {
        surface:
          "linear-gradient(186.33deg, rgba(64, 64, 64, 0.4) 4.99%, rgba(64, 64, 64, 0.2) 94.95%)",
      },
    },
  },
};

export default config;
