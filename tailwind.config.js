// tailwind.config.js

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Add this line!
  ],
  theme: {
    extend: {
      colors: {
        emerald: '#50C878',      // Vibrant, clean green
        olive: '#708238',        // Earthy, natural green
        sage: '#B2AC88',         // Soft, muted green
      },
      animation: {
        'star-movement-bottom': 'star-movement-bottom 4s linear infinite alternate',
        'star-movement-top': 'star-movement-top 4s linear infinite alternate',
      },
      keyframes: {
        'star-movement-bottom': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
        },
        'star-movement-top': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};