/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",

      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         fontFamily: {
            example: ["var(--font-example)"],
            example2: ["var(--font-example2)"],
         },
         colors: {
            primary: "#FF5732",
            secondary: "#707070",
            tertiary: "#FF5732",
         },
      },
   },
   plugins: [],
};
