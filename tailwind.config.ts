import type {Config} from "tailwindcss";

import tailwind_scrollbar from "tailwind-scrollbar";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mediumvioletred: '#c71585', // Exemplo, pode mudar conforme o gosto
      },
    },
  },
  plugins: [
    tailwind_scrollbar({ nocompatible: true }),
  ],
};
export default config;