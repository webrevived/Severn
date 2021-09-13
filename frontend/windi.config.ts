import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
    attributify: true,
    theme: {
        colors: {
            brown: {
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
        'heading-1': 'text-3xl font-tiempos font-semibold',
        'heading-2': 'text-2xl font-tiempos font-normal',
        'heading-3': 'text-lg font-tiempos font-normal',
        'text-1': 'text-lg font-lato font-normal',
        'text-2': 'text-base font-lato font-normal',
    },
})