/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        move: {
          "50%": {transform:'translateY(-1rem)' }
        }
      },
      animation:{
        'movingY': 'move 2s linear infinite'
      }
    },
    fontFamily: {
      oswald:['Oswald', 'sans-serif'],
      dmsans:['DM Sans','sans-serif']
    }
  },
  plugins: [],
}

