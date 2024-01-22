const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/routes/**/*.{svelte,js,ts}'],
    plugins: [require('@tailwindcss/typography'), require('daisyui'), addDynamicIconSelectors()],
    daisyui: {
        themes: [
            {
                julien: {
                    ...require("daisyui/src/theming/themes")["cyberpunk"],
                },
            }
        ],
    }
  };
  