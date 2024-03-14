/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				'TB-Red': '#D74B45',
				'TB-Yellow': '#F2BE56',
				'TB-Blue': '#418BBD'
			}
		},
	},
	plugins: [],
};
