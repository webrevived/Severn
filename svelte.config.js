import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-vercel'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			prependData: "@import './src/lib/styles/mixins.scss';"
		}
	}),
	kit: {
		outDir: 'build',
		adapter: { adapt: adapter }
	}
};

export default config;
