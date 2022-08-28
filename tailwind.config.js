/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"app-background": "#E5E5E5",
				"ma-blue3": "#506BCA",
				"ma-darkBlue": "#1B264F",
				"ma-tan": "#D2AD81",
				"ma-charcoal": "#353844",
			},
			width: {
				"media-item": "437.5px",
				"single-img": "183.5px",

				"item-details": "190px",
			},
			height: {
				"media-item": "336px",
				"double-img-height": "160px",
				"item-details": "193px",
			},
			borderRadius: {
				"media-item": "8px",
			},
		},
	},
	plugins: [],
};
