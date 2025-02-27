module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            light: '#81c784',
            DEFAULT: '#4caf50',
            dark: '#2e7d32',
          },
          secondary: {
            light: '#f1f8e9',
            DEFAULT: '#a5d6a7',
            dark: '#1b5e20',
          }
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }