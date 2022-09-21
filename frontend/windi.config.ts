import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
    attributify: true,
    theme: {
        colors: {
            brown: {
                1200: '#6D6762',
                900: '#83612E',
                600: '#C29653',
            },
            black: {
                600: '#1F2325',
            },
            grey: {
                600: '#4D4A4F',
            },
            white: {
                600: '#DC6062',
                300: '#F5EEE6',
                100: '#FCF8F3',
            }
        },
        fontSize: {
            base: '.75rem', // 12px
            lg: '1rem', // 16px
            xl: '1.3125rem', // 21px
            "2xl": '1.75rem', // 28px 
            "3xl": '2.3125rem' // 37px
        },
        fontFamily: {
            tiempos: [ 'Tiempos', 'sans-serif' ],
            lato: [ 'Lato', 'sans-serif' ],
        },
    },
    shortcuts: {
        // Typography
        'heading-1': 'text-3xl font-tiempos font-400 leading-1em',
        'heading-2': 'text-2xl font-tiempos font-normal',
        'heading-3': 'text-xl font-tiempos font-normal',
        'text-1': 'text-lg font-lato font-normal leading-1.5em',
        'text-2': 'text-base font-lato font-normal leading-1em',
        // Padding
        'x-container': 'px-3 md:px-25.5',
    },
})