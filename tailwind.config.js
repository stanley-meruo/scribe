/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'font-sora': ['"Sora"', 'sans-serif'],
      },
      backgroundImage: {
        'section-bg': "url('/images/expand-bg.svg')",
        'footer-bg': "url('/images/footer-bg.svg')",
        'staff-bg': "url('/images/bg-animation.webp')",
        'staff-a-bg': "url('/images/expand.svg')",
        'section-a-bg': "url('/images/section-bg.webp')",
      },
      textColor: {
        'gradient': "linear-gradient(to right, rgb(109, 77, 249), #213287b9, rgb(253, 1, 123))",
      },
      
    },
  },
  plugins: [],
}

