import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outFit: ["Outfit", "sans-serif"],
      },
      colors: {
        customRed: "#FC4747",
        customGreen: "#47FC47",
        darkBlue: "#10141E",
        bookmarkDarkBlue: "#3f424a",
        greyishBlue: "#5A698F",
        semiDarkBlue: "#161D2F",
      },
    },
  },
  plugins: [],
};
export default config;
