/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/**/*.html'],
    theme: {
        extend: {
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1.25', letterSpacing: '0.025em', fontWeight: '400' }],
                sm: ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.025em', fontWeight: '400' }],
                base: ['1rem', { lineHeight: '1.5', letterSpacing: '0.025em', fontWeight: '400' }],
                lg: ['1.125rem', { lineHeight: '1.75', letterSpacing: '0.025em', fontWeight: '400' }],
                xl: ['1.25rem', { lineHeight: '2', letterSpacing: '0.025em', fontWeight: '400' }],
                '2xl': ['1.5rem', { lineHeight: '2.25', letterSpacing: '0.02em', fontWeight: '500' }],
                '3xl': ['1.875rem', { lineHeight: '2.5', letterSpacing: '0.02em', fontWeight: '500' }],
                '4xl': ['2rem', { lineHeight: '2.75', letterSpacing: '0.02em', fontWeight: '600' }],
                '5xl': ['2.5rem', { lineHeight: '1', letterSpacing: '0.02em', fontWeight: '600' }],
                '6xl': ['3rem', { lineHeight: '1', letterSpacing: '0.02em', fontWeight: '700' }],
                '7xl': ['3.5rem', { lineHeight: '1', letterSpacing: '0.02em', fontWeight: '700' }],
                '8xl': ['4.5rem', { lineHeight: '1', letterSpacing: '0.02em', fontWeight: '700' }],
                '9xl': ['6rem', { lineHeight: '1', letterSpacing: '0.02em', fontWeight: '700' }],
            },
            fontFamily: {
                heading: "cormorantgaramond",
                paragraph: "sora"
            },
            fontWeight: {
                'paragraph-medium': '500',
            },
            colors: {
                'light-gray': '#E9ECEF',
                'soft-gold': '#A98D6B',
                destructive: '#DC3545',
                'destructive-foreground': '#FFFFFF',
                background: '#F8F9FA',
                secondary: '#6C757D',
                foreground: '#212529',
                'secondary-foreground': '#FFFFFF',
                'primary-foreground': '#FFFFFF',
                primary: '#10B981'
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
}
