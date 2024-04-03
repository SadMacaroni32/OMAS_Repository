// tailwind.config.js

export const content = [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}" ];
export const theme = {
  fontFamily: {
    primary: "Inter",
  },
  screens: {
    sm: "640px",
    // => @media (min-width: 640px) { ... }
    md: "768px",
    // => @media (min-width: 768px) { ... }
    lg: "1024px",
    // => @media (min-width: 1024px) { ... }
    xl: "1280px",
    // => @media (min-width: 1280px) { ... }
    "2xl": "1536px",
    // => @media (min-width: 1536px) { ... }
  },
  extend: {},
};
export const plugins = [
  function ({ addUtilities }) {
    const newUtilities = {
      ".custom-scrollbar::-webkit-scrollbar": {
        backgroundColor: "transparent",
        width: "0.4rem",
      },
      ".custom-scrollbar::-webkit-scrollbar-thumb": {
        background: "#24288a",
        borderRadius: "10px",
        cursor: "pointer",
      },
    };
    addUtilities(newUtilities, [ "responsive", "hover" ]);
  },
];
