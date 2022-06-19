const defaultTheme = require('tailwindcss/defaultTheme');

/**
 * @type import('tailwindcss/defaultConfig')
 */
module.exports = {
  content: ['index.html', 'public/js/main.js'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      backgroundImage: {
        'primary-img': "url('/public/img/bg.webp')",
        'primary-card':
          'linear-gradient(113.57deg, rgba(27, 242, 242, 0.2) 0%, rgba(255, 255, 255, 0.0168) 100%)',
        anime: "url('/public/img/anime.jpg')",
        learning: "url('/public/img/learning.jpg')",
        'story-book': "url('/public/img/story-book.jpg')",
        gamer: "url('/public/img/gamer.jpg')",
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: { darkTheme: 'aqua', themes: ['aqua'] },
};
