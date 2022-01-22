const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                rabi: {
                    50: 'hsl(198, 86%, 89%)',
                    100: 'hsl(198, 86%, 84%)',
                    200: 'hsl(198, 86%, 76%)',
                    300: 'hsl(198, 86%, 70%)',
                    400: 'hsl(198, 86%, 62%)',
                    500: 'hsl(198, 86%, 55%)',
                    600: 'hsl(198, 86%, 51%)',
                    700: 'hsl(198, 86%, 35%)',
                    800: 'hsl(198, 86%, 29%)',
                    900: 'hsl(198, 86%, 24%)',
                },
            },
            fontFamily: {
                sans: [
                    'Inter var',
                    'Assistant',
                    ...defaultTheme.fontFamily.sans,
                ],
            },
        },
    },
    plugins: [],
};
