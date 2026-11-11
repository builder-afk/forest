/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Core Minimalist Brutalism Palette: Beige, Red, Yellow, Blue, Black, White
        "brutal-beige": "#F4F0EA",
        "brutal-beige-light": "#FAF7F2",
        "brutal-beige-dark": "#E5E0D5",
        "brutal-red": "#E63946",
        "brutal-red-dark": "#C81D25",
        "brutal-yellow": "#FFE600",
        "brutal-yellow-dark": "#E6CE00",
        "brutal-blue": "#0038FF",
        "brutal-blue-dark": "#0028CC",
        "brutal-black": "#000000",
        "brutal-white": "#FFFFFF",

        // Mapped UI design tokens for backward compatibility
        "surface": "#F4F0EA",
        "background": "#F4F0EA",
        "on-surface": "#000000",
        "on-surface-variant": "#222222",
        "surface-container-lowest": "#FFFFFF",
        "surface-container-low": "#EFECE5",
        "surface-container": "#E8E3DA",
        "surface-container-high": "#DFD9CE",
        "surface-container-highest": "#D5CEBF",
        "surface-variant": "#E0DAD0",

        "primary": "#0038FF",
        "on-primary": "#FFFFFF",
        "primary-container": "#FFE600",
        "on-primary-fixed": "#000000",
        "on-primary-container": "#000000",
        "primary-fixed": "#FFE600",

        "secondary": "#E63946",
        "on-secondary": "#FFFFFF",
        "secondary-container": "#E63946",
        "on-secondary-container": "#FFFFFF",

        "tertiary": "#0038FF",
        "on-tertiary": "#FFFFFF",
        "tertiary-container": "#DBEAFE",
        "on-tertiary-container": "#000000",

        "inverse-surface": "#000000",
        "inverse-on-surface": "#FFFFFF",
        "outline": "#000000",
        "outline-variant": "#000000",
        "error": "#E63946",
        "on-error": "#FFFFFF"
      },
      boxShadow: {
        "brutal-sm": "2px 2px 0px #000000",
        "brutal": "3px 3px 0px #000000",
        "brutal-md": "4px 4px 0px #000000",
        "brutal-lg": "6px 6px 0px #000000",
        "brutal-yellow": "3px 3px 0px #FFE600",
        "brutal-red": "3px 3px 0px #E63946",
        "brutal-blue": "3px 3px 0px #0038FF",
        "brutal-reverse": "-3px -3px 0px #000000"
      },
      borderWidth: {
        "1.5": "1.5px",
        "3": "3px"
      },
      borderRadius: {
        DEFAULT: "0px",
        sm: "0.125rem",
        md: "0.25rem",
        lg: "0.375rem",
        xl: "0.5rem",
        "2xl": "0.75rem",
        "3xl": "1rem",
        full: "9999px"
      },
      spacing: {
        "gutter-mobile": "0.75rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-xl": "2.5rem",
        "gutter": "1.5rem",
        "margin": "3rem",
        "margin-mobile": "1rem",
        "space-md": "1rem",
        "space-lg": "1.5rem"
      },
      fontFamily: {
        "headline-sm": ["Outfit", "sans-serif"],
        "headline-lg-mobile": ["Outfit", "sans-serif"],
        "headline-md": ["Outfit", "sans-serif"],
        "body-sm": ["Plus Jakarta Sans", "sans-serif"],
        "display-hero-mobile": ["Outfit", "sans-serif"],
        "label-caps": ["Outfit", "sans-serif"],
        "display-hero": ["Outfit", "sans-serif"],
        "label-md": ["Outfit", "sans-serif"],
        "headline-lg": ["Outfit", "sans-serif"],
        "body-lg": ["Plus Jakarta Sans", "sans-serif"],
        "title-lg": ["Outfit", "sans-serif"],
        "numeric-stat": ["Outfit", "sans-serif"],
        "body-md": ["Plus Jakarta Sans", "sans-serif"]
      },
      fontSize: {
        "headline-sm": ["22px", { lineHeight: "26px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "headline-lg-mobile": ["30px", { lineHeight: "34px", letterSpacing: "-0.02em", fontWeight: "800" }],
        "headline-md": ["28px", { lineHeight: "32px", letterSpacing: "-0.015em", fontWeight: "800" }],
        "body-sm": ["13px", { lineHeight: "18px", fontWeight: "600" }],
        "display-hero-mobile": ["38px", { lineHeight: "42px", letterSpacing: "-0.02em", fontWeight: "900" }],
        "label-caps": ["11px", { lineHeight: "14px", letterSpacing: "0.08em", fontWeight: "800" }],
        "display-hero": ["56px", { lineHeight: "60px", letterSpacing: "-0.03em", fontWeight: "900" }],
        "label-md": ["14px", { lineHeight: "18px", letterSpacing: "0.01em", fontWeight: "700" }],
        "headline-lg": ["40px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "800" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "500" }],
        "title-lg": ["18px", { lineHeight: "24px", letterSpacing: "-0.005em", fontWeight: "800" }],
        "numeric-stat": ["32px", { lineHeight: "32px", letterSpacing: "-0.02em", fontWeight: "900" }],
        "body-md": ["15px", { lineHeight: "22px", fontWeight: "500" }]
      }
    }
  },
  plugins: []
};
