const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#3B79B3",
      secondary: "#39BDF8",
      "nav-background": "#FFFFFF",
      background: "#1A202C",
      "secondary-background": "#e2e8f0",
      "txt-color": "#000000",
      "txt-secondary-color": "#64748b",
      "txt-hover-color": "#94a3b8",
      ...colors,
    },
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      trans_on: {
        right: "0",
        transition: "left .5s ease-out",
      },
      trans_off: {
        right: "-30rem",
        transition: "left 1s ease-out",
      },
    },
  },
  plugins: [],
};
