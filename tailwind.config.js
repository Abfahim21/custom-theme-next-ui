const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        cDark: {
          extend: "dark",
          colors: {
            background: "#0E141B",
            foreground: "#ffffff",
            primary: {
              DEFAULT: "#4B6176",
              foreground: "#ffffff",
            },
            secondary: {
              DEFAULT: "#447FD2",
              foreground: "#ffffff",
            },
            success: {
              DEFAULT: "#62B54C",
              foreground: "#ffffff",
            },
            warning: {
              DEFAULT: "#E0DB45",
              foreground: "#ffffff",
            },
            danger: {
              DEFAULT: "#D97C3E",
              foreground: "#ffffff",
            },
            focus: "#4B6176",
          },
        },
        cLight: {
          extend: "light",
          colors: {
            background: "#ffffff",
            foreground: "#000000",
            primary: {
              DEFAULT: "#4433FF",
              foreground: "#ffffff",
            },
            secondary: {
              DEFAULT: "#2CD4F9",
              foreground: "#ffffff",
            },
            success: {
              DEFAULT: "#B1E514",
              foreground: "#ffffff",
            },
            warning: {
              DEFAULT: "#FFAF38",
              foreground: "#ffffff",
            },
            danger: {
              DEFAULT: "#F7402C",
              foreground: "#ffffff",
            },
            focus: "#4433FF",
          },
        },
      },
    }),
  ],
};
