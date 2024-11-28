module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust based on your project structure
    "./public/index.html",            // Include the root HTML file if necessary
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'], 
        roboto: ['Roboto', 'serif'],      
      },
    },
  },
  plugins: [],
};
