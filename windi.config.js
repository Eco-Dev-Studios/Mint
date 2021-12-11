import { defineConfig } from "windicss/helpers";
import colors from "windicss/colors";
import filters from "windicss/plugin/filters";
import typography from "windicss/plugin/typography";
import formsPlugin from "windicss/plugin/forms";
import pluginAnimation from "@windicss/plugin-animations";

export default defineConfig({
  preflight: false,
  darkMode: "class",
  plugins: [formsPlugin, typography, filters, pluginAnimation],
  shortcuts: {
    link: "font-semibold text-center text-lg text-gray-800 no-underline dark:text-gray-50",
  },
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
});
