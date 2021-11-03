module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  mode: "jit",
  purge: {
    content: ["./pages/**/*.js"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        body: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
      },
      colors: {
        primary: {
          50: "#FFD9DC",
          100: "#FFB8BE",
          200: "#FF9FA7",
          300: "#FF828C",
          400: "#FF616E",
          500: "#FB404F",
          600: "#D92C3A",
          700: "#B81C29",
          800: "#930F1A",
          900: "#5A050C",
        },
        secondary: {
          50: "#E7EDFF",
          100: "#C7D4FA",
          200: "#9DB4F4",
          300: "#7393EB",
          400: "#5F7DCD",
          500: "#435FAA",
          600: "#2F447B",
          700: "#1F3263",
          800: "#0F1C3E",
          900: "#060E23",
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/aspect-ratio")],
};
