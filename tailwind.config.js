/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Next.js App Router를 사용하는 경우
    "./pages/**/*.{js,ts,jsx,tsx}", // Page Router를 사용하는 경우
    "./components/**/*.{js,ts,jsx,tsx}", // 공통 컴포넌트
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      logo: ["Josefin_Sans"],
      body: ["IBM_Plex_Sans_KR"],
    },
    extend: {},
  },
  plugins: [],
};
