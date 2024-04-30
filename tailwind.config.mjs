const plugin = require('tailwindcss/plugin');

const primary = {
		hover: 'var(--primary-hover)',
		active: 'var(--primary-active)',
		focus: 'var(--primary-focus)',
		DEFAULT: 'var(--primary)'
}

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
			xxl: '1920px'
		},
		extend: {
			screens:{ 
				mobile: '620px'
			},
			boxShadow: {
        '3xl': '0 10px 50px -10px rgba(0, 0, 0, 0.15)',
      },
			gridTemplateColumns: {
        'auto-fill-100': 'repeat(auto-fill, minmax(180px, 1fr))',
				'auto-fit-sm': 'repeat(auto-fill, minmax(150px, 3fr))',
        'auto-fit-100': 'repeat(auto-fit, minmax(140px, 1fr))',
				
      },
			textColor: {
				DEFAULT: 'var(--default-text)',
				primary,
				secondary: 'var(--secondary-text)'	
			},
			colors: {
				bgColor: 'var(--bg)',
				primary,
				secondary: 'var(--secondary)'
			},
		},
	},
	plugins: [
		plugin(function({ addVariant }){ 
			addVariant('enabled', '&.active');
		})
	],
}
