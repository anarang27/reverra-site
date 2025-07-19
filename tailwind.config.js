theme: {
  extend: {
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
}