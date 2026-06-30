import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.08)'
      },
      colors: {
        brand: {
          950: '#08112c',
          900: '#102153',
          500: '#3b82f6'
        }
      }
    }
  },
  plugins: []
}

export default config
