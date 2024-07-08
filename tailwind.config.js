/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#2C2C2C',
          secondary: '#212121',
          text: '#FFFFFF',
        },
        light: {
          primary: '#4A95D6',
          secondary: '#FFFFFF',
          text: '#000000',
        },
      },
    },
    plugins: [],
  }
} 