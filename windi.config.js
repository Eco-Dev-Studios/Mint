import { defineConfig } from "windicss/helpers";
import colors from "windicss/colors";
import filters from "windicss/plugin/filters";
import typography from "windicss/plugin/typography";

export default defineConfig({
  preflight: false,
  darkMode: "class",
  plugins: [typography(), filters()],
  shortcuts: {},
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
});
