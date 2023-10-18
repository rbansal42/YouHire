/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				text: "#f0f0ef",
				background: "#151514",
				primary: "#ffb820",
				secondary: "#3a3a3a",
				accent: "#757378",
			},
		},
	},
	plugins: [],
};
