module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        backgroundImage: {
          'felt-texture': "url('/assets/board.svg')",
        },
        colors: {
          poker: {
            green: '#0a5a4a',
            gold: '#ffd700',
            red: '#c53030'
          }
        }
      },
    },
    plugins: [],
  }