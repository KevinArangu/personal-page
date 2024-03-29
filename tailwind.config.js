const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["dark"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      body: ["Poppins", "sans-serif"],
    },

    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },

    border: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
    },

    container: {
      center: true,
      padding: "1rem",
      screens:{
        DEFAULT: "600px",
        sm: "700px",
        md: "850px"
      }
    },

    extend: {
      colors: {
        transparent: {
          DEFAULT:"transparent",
        },
        primary: {
          DEFAULT: "#051C3B",
          dark: "#A6C0DB"
        },
        secondary: {
          DEFAULT: "#6995C2",
          dark: "#002F59"
        },
        underscore: {
          DEFAULT: "#0160A4"
        },
        "green-light": {
          DEFAULT: "#cceeec"
        },
        "green-dark": {
          DEFAULT: "#065a68"
        },
        "blue-light": {
          DEFAULT:"#b3d6f1"
        },
        "blue-dark": {
          DEFAULT: "#072344"
        },
        "yellow-lighter": {
          DEFAULT: "#f6e8c6"
        },
        "yellow-light": {
          DEFAULT: "#f8edd0"
        },
        "yellow-dark": {
          DEFAULT: "#daa512"
        },
        "grey-lightest": {
          DEFAULT: "#eff0f3"
        },
        "grey-lighter": {
          DEFAULT: "#eceef1"
        },
        "grey-light": {
          DEFAULT: "#ccd7e0"
        },
        grey: {
          DEFAULT: "#adb6c4"
        },
      },

      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        76: "19rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
        100: "25rem",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        116: "29rem",
        120: "30rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
        136: "34rem",
        140: "35rem",
        144: "36rem",
        148: "37rem",
        152: "38rem",
        156: "39rem",
        160: "40rem",
        164: "41rem",
        168: "42rem",
        172: "43rem",
        176: "44rem",
        180: "45rem",
        184: "46rem",
        188: "47rem",
        190: "48rem",
        194: "49rem",
        200: "50rem",
        204: "51rem",
      },
      inset: {
        50: "50%",
        100: "100%",
      },
      zIndex: {
        "-1": "-1",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.primary"),
            a: {
              fontWeight: theme("fontWeight.semibold"),
              color: theme("colors.green"),
              textDecoration: "underline",
              transition: "color 300ms",
              "&:hover": {
                color: theme("colors.primary"),
              },
            },
            "p, li": {
              fontWeight: theme("fontWeight.light"),
            },
            "h1, h2, h3, h4, h5, h6": {
              fontWeight: theme("fontWeight.semibold"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.primary"),
            },
            blockquote: {
              borderLeftWidth: "1rem",
              borderColor: theme("colors.green-dark"),
              borderRadius: "3px",
              backgroundColor: theme("colors.green-light"),
              padding: `${theme("spacing.4")} ${theme("spacing.6")}`,
              color: theme("colors.green"),
              fontStyle: "normal",
              p: {
                margin: 0,
                fontWeight: theme("fontWeight.normal"),
              },
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.white"),
            a: {
              color: theme("colors.secondary"),
              "&:hover": {
                color: theme("colors.green"),
              },
            },
            "h1, h2, h3, h4, h5, h6": {
              color: theme("colors.white"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.secondary"),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography")({
      modifiers: [],
    }),
    require("@tailwindcss/forms"),
  ],
}