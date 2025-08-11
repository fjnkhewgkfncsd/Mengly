/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'agustina': ['Agustina', 'sans-serif']
            },
        },
    },
    plugins: [],
}

