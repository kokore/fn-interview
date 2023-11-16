import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    screens: {
      'desktop': '1920px',
      'tablet': '768px',
      'mobile': '320px'
    },
    colors: {
      'white': '#FFFFFF',
      'gray': '#F5F4F9',
      'purple': '#5E3DB3',
      'darkblue': '#090C35'
    }
  },
  plugins: [],
}
export default config
