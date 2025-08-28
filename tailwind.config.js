/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/client/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'light-bg': '#f0eee6',
          'dark-bg': '#1f1e1d',
        },
      },
    },
    plugins: [],
}