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
        darkTheme: false,
        themes: [
            {
                julienlight:  {
                    "color-scheme": "light",
                    "primary": "#06b6d4",

                    "secondary": "#86efac",
                    // "secondary-content": "oklch(98.71% 0.0106 342.55)",
                    "accent": "#d8b4fe",
                    "neutral": "#d1b5db",
                    // "neutral-content": "#D7DDE4",
                    "base-100": "f5f5f4",
                    // "base-200": "#F2F2F2",
                    // "base-300": "#E5E6E6",
                    // "base-content": "#1f2937",
                    "info": "#70efef",
                    "success": "42d57e",
                    "warning": "#eac318",
                    "error": "#e07878",
          
                    // "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
                    // "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
                    // "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
                    // "--animation-btn": "0.25s", // duration of animation when you click on button
                    // "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
                    // "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
                    // "--border-btn": "1px", // border width of buttons
                    // "--tab-border": "1px", // border width of tabs
                    // "--tab-radius": "0.5rem", // border radius of tabs
                  },
                  juliendark: {
                    "color-scheme": "dark",
                    "primary": "#06b6d4",

                    "secondary": "#86efac",
                    // "secondary-content": "oklch(98.71% 0.0106 342.55)",
                    "accent": "#d8b4fe",
                    "neutral": "#9ca3af",
                    // "neutral-content": "#D7DDE4",
                    "base-100": "4b5563",
                    // "base-200": "#F2F2F2",
                    // "base-300": "#E5E6E6",
                    // "base-content": "#1f2937",
                    "info": "#70efef",
                    "success": "42d57e",
                    "warning": "#eac318",
                    "error": "#e07878",

                    // "primary": "oklch(65.69% 0.196 275.75)",
                    // "secondary": "oklch(74.8% 0.26 342.55)",
                    // "accent": "oklch(74.51% 0.167 183.61)",
                    // "neutral": "#2a323c",
                    // "neutral-content": "#A6ADBB",
                    // "base-100": "#1d232a",
                    // "base-200": "#191e24",
                    // "base-300": "#15191e",
                    // "base-content": "#A6ADBB",
                  }
            }
        ],
    }
  };
  