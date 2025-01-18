/** @type {import('tailwindcss').Config} */
export default { 
  darkMode:"selector",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Lime-Green": "hsl(163, 72%, 41%)",
        "Bright-Red": "hsl(356, 69%, 56%)",
        "Facebook": "hsl(208, 92%, 53%)",
        "Twitter": "hsl(203, 89%, 53%)",
        "YouTube": "hsl(348, 97%, 39%)",
        "Toggle-Dark-theme": "linear gradient hsl(210, 78%, 56%) to hsl(146, 68%, 55%)",
        "Very-Dark-Blue": "hsl(230, 17%, 14%)",
        "Very-Dark-Blue-superior": "hsl(232, 19%, 15%)",
        "Dark-Desaturated-Blue": "hsl(228, 28%, 20%)",
        "Desaturated-Blue": "hsl(228, 34%, 66%)",
        "White": "hsl(0, 0%, 100%)",
        "Toggle-Ligth-theme": "hsl(230, 22%, 74%)",
        "White": "hsl(0, 0%, 100%)",
        "Very-Pale-Blue": "hsl(225, 100%, 98%)",
        "Light-Grayish-Blue": "hsl(227, 47%, 96%)",
        "Dark-Grayish-Blue": "hsl(228, 12%, 44%)",
        "Very-Dark-Blue": "hsl(230, 17%, 14%)",

      },
      backgroundImage:{
        "Toggle-Gradient": "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
        "Instagram-Gradient": "linear-gradient(to right, hsl(37, 97%, 70%),hsl(329, 70%, 58%))"
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      
      fontFamily:{
        Inter:["Inter"]
      },
       fontSize: {
        'responsive': 'clamp(1.5rem, 2.5vw, 6rem)',
      },
    },
  },
  plugins: [],
}

