/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    "./.storybook/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#000',
      },
    },
  },
  plugins: [],
}

