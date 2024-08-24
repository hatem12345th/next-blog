/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    container:{
      center:true,
      padding: '0rem',
      screens:{
        '2xl':'1000px'
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    darkTheme: "light", // name of one of the included themes for dark mode
    
  },
};
