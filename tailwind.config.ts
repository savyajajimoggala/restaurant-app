// import type { Config } from "tailwindcss";

// export default {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       container: {
//         center: true,
//       }
//     },
//   },
//   plugins: [],
// } satisfies Config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',  // Pages directory
    './components/**/*.{js,ts,jsx,tsx}',  // Components directory
    './app/**/*.{js,ts,jsx,tsx}',  // If using the new app directory in Next.js 13
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
