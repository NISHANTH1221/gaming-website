/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "fairblack" : "#0C0C0C",
        "fairred": "#B82E03",
        "fairorange" : "#ff3d00"
      },
      zIndex : {
        "60" : "60",
        "1" : "1"
      },
      fontSize: {
        "160" : "160px" ,
        "200" : "200px"
      },
      fontFamily :{
        "Orbitron" : ["Orbitron"]
      }
    },
  },
  plugins: [],
}

