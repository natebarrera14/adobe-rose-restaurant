/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './src/**/*.{js,css}'],
  theme: {
    extend: {
      colors: {
        adobe: '#CD3B30',
        'adobe-dark': '#B63329',
        olive: '#6A6930',
        charcoal: '#32373C',
        ink: '#1B1C1A',
        muted: '#595F65',
        linen: '#FBF9F5',
        sand: '#EFECE6',
        mortar: '#E2DDD5'
      },
      fontFamily: {
        display: ['"EB Garamond"', 'Georgia', 'serif'],
        body: ['"Open Sans"', 'Arial', 'sans-serif']
      },
      maxWidth: { site: '1240px' },
      boxShadow: {
        ambient: '0 4px 20px -2px rgba(50,55,60,.08)',
        lifted: '0 10px 30px -4px rgba(50,55,60,.12)'
      }
    }
  },
  plugins: []
};
