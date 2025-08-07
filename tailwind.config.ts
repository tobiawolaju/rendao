import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'nouns-black': 'hsl(var(--nouns-black))',
        'nouns-white': 'hsl(var(--nouns-white))',
        'nouns-red': 'hsl(var(--nouns-red))',
        'nouns-blue': 'hsl(var(--nouns-blue))',
        'nouns-yellow': 'hsl(var(--nouns-yellow))',
        'nouns-purple': 'hsl(var(--nouns-purple))',
      },
      borderRadius: {
        'none': '0',
        'sm': '0',
        'md': '0',
        'lg': '0',
        'xl': '0',
        '2xl': '0',
        '3xl': '0',
        'full': '0',
      },
      boxShadow: {
        'nouns': '8px 8px 0px 0px rgba(0,0,0,1)',
        'nouns-sm': '4px 4px 0px 0px rgba(0,0,0,1)',
        'nouns-lg': '12px 12px 0px 0px rgba(0,0,0,1)',
      },
    },
  },
  plugins: [],
};
export default config;
