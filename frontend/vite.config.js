import { sveltekit } from '@sveltejs/kit/vite';
import WindiCSS from 'vite-plugin-windicss'


/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit(), WindiCSS()],
    optimizeDeps: {
        exclude: ['@sveltestack/svelte-query']
    }, 
    server: {
        watch: {
            usePolling: true,
        }
    }
};

export default config;