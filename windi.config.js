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
  shortcuts: {},
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
});
