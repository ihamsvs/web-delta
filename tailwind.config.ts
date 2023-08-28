import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'fondo': '#111111',
      'text': '#f2f2f2',
      'contraste': '#333333',
      'botones': '#f39c12',
      'resaltar': '#00bcd4',
      'enlaces': '#4caf50',
      'acciones': '#e91e63',
      'interactivos': '#ff9800',
      'destacar': ' #2196f3'

    }
  },
  plugins: [],
}
export default config
