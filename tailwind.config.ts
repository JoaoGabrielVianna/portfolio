import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      'background-color': '#161513',
      'primary-color': '#D9D9D9',
      'secondary-color': '#C5C5C5',
      'paragraph-color': '#8491A0',
      'background-header-color': '#1D1B1B',
      'background-card-color': '#2A2A2A',
    },
    backgroundImage: {
      'orange-blue-gradient': 'linear-gradient(to right, #FF8660, #35649C)',
      'orange-gradient': 'linear-gradient(to right, #FF8660, #D5491D)',
      'black-gradient': 'linear-gradient(to bottom, #FDFDFD, rgba(255, 255, 255, 0.18))',
      'blue-gradient': 'linear-gradient(to top, #002B4A, #A6E3F4)'
    },
  },
  plugins: [],
};
export default config;
