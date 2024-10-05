/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                // login: "url('@/assets/images/login-bg.png')",
                login: "url('@/assets/images/login.jpg')",
                logo: "url('@/assets/images/logo.png')",
                nav: "url('@/assets/images/nav-bg.jpg')",
            },
            fontFamily: {
                main: ["'Monaspace Neon', 'LXGW WenKai Screen'"],
                code: ["'ComicShannsMono Nerd Font', 'monospace'"],
            },
        },
    },
    plugins: [],
};
