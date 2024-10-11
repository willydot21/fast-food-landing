const plugin = require('tailwindcss/plugin');

const primary = {
	hover: 'var(--primary-hover)',
	active: 'var(--primary-active)',
	focus: 'var(--primary-focus)',
	DEFAULT: 'var(--primary)'
}


const secondaryText = {
	hover: 'var(--secondary-text-hover)',
	active: 'var(--secondary-text-active)',
	focus: 'var(--secondary-text-focus)',
	DEFAULT: 'var(--secondary-text)'
}

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			card_bp: '696px',
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
			xxl: '1920px'
		},
		extend: {
			backgroundImage: {
				burgerOffer: 'url("../images/burger-offer.jpg")'
			},
			scale: {
				175: '1.75'
			},
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
				'auto-fit-mb': 'repeat(auto-fit, minmax(265px, 1fr))',
				
      },
			textColor: {
				DEFAULT: 'var(--default-text)',
				primary,
				secondary: secondaryText	
			},
			colors: {
				bgColor: 'var(--bg)',
				secondary: 'var(--secondary)',
				blob: {
					green: {
						DEFAULT: '#996116',
						dark: '#71470f'
					}
				},
				tertiary: secondaryText,
				primary,
			},
		},
	},
	plugins: [
		plugin(function({ addVariant }){ 
			addVariant('enabled', '&.active');
		})
	],
}
