import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-dirt': '#9E7861',
        'soft-dirt-hover': '#B08A74',
        'muted-leaf': '#789C5E',
        'muted-leaf-hover': '#8EAE76',
        'pastel-blue': '#AEC6CF',
        'pastel-blue-hover': '#C1D6E4',
        'cream-yellow': '#FFFACD',
        'cream-yellow-hover': '#FFFBE6',
        'soft-wood': '#B69B7D',
        'soft-wood-hover': '#C7A792',
        'warm-gray': '#D3D3D3',
        'warm-gray-hover': '#E0E0E0'
      }
    },
  },
  plugins: [],
};
export default config;
