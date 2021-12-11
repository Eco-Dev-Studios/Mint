import { defineConfig } from "windicss/helpers";
import colors from "windicss/colors";
import typography from "windicss/plugin/typography";
import forms from "windicss/plugin/forms";
import filters from "windicss/plugin/filters";
import pluginAnimation from "@windicss/plugin-animations";

export default defineConfig({
  darkMode: "class",
  plugins: [forms, typography, filters, pluginAnimation],
  preflight: true,
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
