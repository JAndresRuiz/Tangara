/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Alethia Pro", ...defaultTheme.fontFamily.sans],
			  },
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
