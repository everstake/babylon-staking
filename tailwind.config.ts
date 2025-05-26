import type { Config } from "tailwindcss";

import { screenBreakPoints } from "./src/config/screen-breakpoints";

const util = require("util");
const coreUIConfig = require("@babylonlabs-io/core-ui/tailwind");

console.log(
  "coreUIConfig:",
  util.inspect(coreUIConfig, {
    depth: null,
    colors: true,
    maxArrayLength: null,
  }),
);
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
      colors: {
        // Map to core-ui color system
        surface: "#b2b2b2",
        "primary-main": "#000000", // Everstake primary orange
        "primary-dark": "#e66411", // Darker orange
        "primary-light": "#ff9554", // Lighter orange
        "primary-contrast": "#FFFFFF", // White
        "secondary-main": "#0DB7BF", // Everstake secondary teal
        "secondary-highlight": "#212121", // es-secondary-2

        // Custom Everstake colors
        "base-400": "hsl(var(--base-400) / <alpha-value>)",
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
    },
  },
};

export default config;
