/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bgimg" : "url('./components/assets/images/earth.svg')",
        "bg1" : "url('./components/assets/images/bg1.svg')",
        "bg2" : "url(./components/assets/images/bg2.svg)",
        "astro" : "url('./components/assets/images/astronaut.svg')",
        "space": "url('./components/assets/images/space.jpg')",
        "login-bg" : "url('./components/assets/images/loginbg.png')",
        "homebg" : "url('./components/assets/images/homebg.svg')",
        "cardbg" : "url('./components/assets/images/cardbg.svg')",
        "homecard" : "url('./components/assets/images/homecard.png')",
        "sat" : "url('./components/assets/images/Sat.svg')",
        "btnbg" : "url('./components/assets/images/btnbg.svg')",
        "circle": "url('./components/assets/images/circle.svg')",
        "location" :"url('./components/assets/images/location.svg')",
        "moon" : "url('./components/assets/images/moon.svg')",
        "spacecard" : "url('./components/assets/images/spacecard.svg')"
      },
      fontFamily: {
        calluna: ['Calluna', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        meri: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}

