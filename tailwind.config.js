/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        background:"#E9EDF5",
        username:"#424D6A",
        comment:"#676565",
        count:"#49703C",
        input:"#7A7A7A"
      },
      boxShadow:{
        card:"-6px 6px 4px -1px rgba(0, 0, 0, 0.07)"
      },    
    },
  },
  plugins: [],
}
