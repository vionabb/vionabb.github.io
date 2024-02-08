const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/routes/**/*.{svelte,js,ts}'],
    plugins: [require('@tailwindcss/typography'), require('daisyui'), addDynamicIconSelectors()],
    theme: {
        extend: {
            fontFamily: {
                slabserif: ['Rockwell', 'Rockwell Nova', 'Roboto Slab', 'DejaVu Serif', 'Sitka Small', 'serif'],
                serif: ['Charter', 'Bitstream Charter', 'Sitka Text', 'Cambria', 'serif'],
            }
        }
    },
    daisyui: {
        theme: 'julienlight',
        darkTheme: 'juliendark',
        themes: [
            {
                julienlight:  {
                    "color-scheme": "light",
                    "primary": "#44D6AB",
                    "secondary": "#014746",
                    "accent": "#9574B8",
                    "neutral": "#7C7C7C",
                    "neutral-content": "EAE9E4",
                    "base-100": "FEFAE9",
                    // "secondary-content": "oklch(98.71% 0.0106 342.55)",
                    // "neutral-content": "#D7DDE4",
                    
                    "base-200": "#E0DDD0",
                    "base-300": "#C0BEB7",
                    "base-content": "#474332",
                    "info": "#708CEF",
                    "success": "1FC764",
                    "warning": "#EAC318",
                    "error": "#E07878",
          
                    "--rounded-box": "0.5rem", // border radius rounded-box utility class, used in card and other large boxes
                    "--rounded-btn": "0.25rem", // border radius rounded-btn utility class, used in buttons and similar element
                    "--rounded-badge": "1rem", // border radius rounded-badge utility class, used in badges and similar
                    // "--animation-btn": "0.25s", // duration of animation when you click on button
                    // "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
                    // "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
                    "--border-btn": "1px", // border width of buttons
                    // "--tab-border": "1px", // border width of tabs
                    // "--tab-radius": "0.5rem", // border radius of tabs
                  },
                  juliendark: {
                    "color-scheme": "dark",
                    "primary": "#44D6AB",
                    "secondary": "#014746",
                    "accent": "#9574B8",
                    "neutral": "#7C7C7C",
                    "neutral-content": "EAE9E4",
                    "base-100": "33322E",
                    // "secondary-content": "oklch(98.71% 0.0106 342.55)",
                    // "neutral-content": "#D7DDE4",
                    
                    "base-200": "#262520",
                    "base-300": "#1D1C1B",
                    "base-content": "#DBD8CA",
                    "info": "#708CEF",
                    "success": "1FC764",
                    "warning": "#EAC318",
                    "error": "#E07878",
          
                    "--rounded-box": "0.5rem", // border radius rounded-box utility class, used in card and other large boxes
                    "--rounded-btn": "0.25rem", // border radius rounded-btn utility class, used in buttons and similar element
                    "--rounded-badge": "1rem", // border radius rounded-badge utility class, used in badges and similar
                    // "--animation-btn": "0.25s", // duration of animation when you click on button
                    // "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
                    // "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
                    "--border-btn": "1px", // border width of buttons
                    // "--tab-border": "1px", // border width of tabs
                    // "--tab-radius": "0.5rem", // border radius of tabs
                  }
            }
        ],
    }
  };
  