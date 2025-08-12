/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'xs': '415px', // custom breakpoint
            },
            fontFamily: {
                'agustina': ['Agustina', 'sans-serif']
            },
        },
    },
    plugins: [],
}

