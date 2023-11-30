/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        onNeutralBg: 'var(--onNeutralBg)',
        neutralBg: 'var(--neutralBg)',
        onPrimaryBg: 'var(--onPrimaryBg)',
        primaryBg: 'var(--primaryBg)',
        primary: 'var(--primary)',
        'brown': {
          50: '#f7f3f0',
          100: '#efe1d9',
          200: '#e2c0b0',
          300: '#d49e87',
          400: '#c77d5e',
          500: '#b95c35',
          600: '#954c2b',
          700: '#703c21',
          800: '#4c2c17',
          900: '#281d0d',
        },
        'mountain': {
          50:  '#f7f7f7',
          100: '#efefef',
          200: '#dfe0e0',
          300: '#cfcfcf',
          400: '#b0b0b0',
          500: '#919191',
          600: '#828282',
          700: '#6d6d6d',
          800: '#595959',
          900: '#474747',
        },
        'sand': {
          50:  '#e2dac2',
          100: '#dbd2b5',
          200: '#d5caa8',
          300: '#cfc29b',
          400: '#c8ba8d',
          500: '#c2b280',
          600: '#bcaa73',
          700: '#b5a265',
          800: '#af9a58',
          900: '#a5904f',
        },
      },
      backgroundColor: {
        primaryBg: 'var(--primaryBg)',
        neutralBg: 'var(--neutralBg)',
        onNeutralBg: 'var(--onNeutralBg)',
        onPrimaryBg: 'var(--onPrimaryBg)',
        primaryBgHover: 'var(--primaryHover)',

      },
    },
  },
  plugins: [],
}
