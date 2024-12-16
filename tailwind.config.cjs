/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],

  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Barlow", "sans-serif"],
      },

      colors: {
        green: {
          400: "#004228",
          300: "#02B140",
          200: "#C8E3D0",
          100: "#C7D69B",
          50: "#DAE6B6",
        },

        red: {
          400: "#A8324C",
          300: "#FF7275",
          200: "#FBDED3",
          100: "#FADCE9",
        },

        yellow: {
          300: "#FFF054",
          200: "#fFFF69B",
          100: "#FFF9E3",
        },

        blue: {
          200: "#01417F",
          100: "#B3DFED",
        },

        brown: {
          200: "#613D25",
          100: "#ECE7DB",
        },

        white: {
          100: "#ffffff",
        },

        black: {
          100: "#1A1919",
        },

        text: {
          primary: "#FFFFFF",
          secondary: "#E0EFFA",
          tertiary: "#000000",
          header: "#A8324C",
        },
      },

      keyframes: {
        walking: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(40px)" },
        },

        hat: {
          "0%": { transform: "translateX(-200%)" },
          "100%": { transform: "translateX(300%)" },
        },

        jump: {
          "0%": { transform: "translateY (-800px)" },
          "100%": { tranform: "translateY (800px)" },
        },

        looking: {
          "0%": { transform: "translateX(0px)" },
          "50%": { transform: "translateY(15px)" },
          "100%": { transform: "translateX(0px)" },
        },

        spinning: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-50deg)" },
        },

        riding: {
          "0%": { transform: "translate(-150%, -100%)" },
          "100%": { transform: "translate(100px, 100px)" },
        },
      },

      animation: {
        walking: "walking 5s ease-in-out infinite",
      },

      animation: {
        hat: "walking 5s ease-in-out infinite",
      },

      animation: {
        jump: "jump 10s ease-in-out infinite",
      },

      animation: {
        looking: "looking 5s ease-in-out",
      },

      animation: {
        spinning: "spinning 5s ease-in-out infinite",
      },

      animation: {
        riding: "riding 10s ease-in-out infinite",
      },
    },
  },
};
