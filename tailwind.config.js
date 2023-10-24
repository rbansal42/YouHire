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
			backgroundImage: {
				"hero-pattern":
					"url('https://e0.pxfuel.com/wallpapers/1023/5/desktop-wallpaper-dark-aesthetic-background-dark-aesthetic-star.jpg')",
			},

			fontSize: {
				xs: "0.650rem",
				sm: "0.750rem",
				base: "1rem",
				xl: "1.333rem",
				"2xl": "1.777rem",
				"3xl": "2.369rem",
				"4xl": "3.158rem",
				"5xl": "4.210rem",
			},
			fontFamily: {
				Poppins: ["Poppins", "sans-serif"],
			},
			fontWeight: {
				normal: "400",
				bold: "700",
			},
		},
	},
	plugins: [],
};
