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
            primary: "#2E3840",
            secondary: "#FF0303",
            secondaryLight: "#FD7171",
            tertiary: "#FF5732",
         },
      },
   },
   plugins: [],
};
