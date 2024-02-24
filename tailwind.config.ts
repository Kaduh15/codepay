import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
      },
      space: {
        '2.5': '0.875rem', // 14px
      },
      border: {
        '3': '0.1875rem', // 3px
      },
    },
  },
  plugins: [],
}
export default config
