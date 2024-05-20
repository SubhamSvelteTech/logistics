/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        "login": "url('/images/login-background.png')",
        "email": "url('/icons/email.svg')",
      },
      colors:{
        teal:"#0E8080",
        gray:"#D3D3D3"
      },
      screens:{
        "mobile": { min: "360px", max: "768px" },
        "mac":{min:"769px",max:"1441px"},
        "laptops":{min:"1442px"}
      }
    },
  },
  plugins: [],
}
