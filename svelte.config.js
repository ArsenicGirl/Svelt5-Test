//import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';
//import adapter from '@sveltejs/adapter-auto';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),/*
	preprocess: sveltePreprocess({
		sass:{}
	}),
	base:'/test/',*/
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		prerender: {
            entries: ['*']
			//default: true,
		},
		/*paths: {
			base: process.argv.includes('dev') ? '' : process.env.VITE_BASE_URL
		}*/
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/<nombre-del-repositorio>' : ''
		}
		
	}
};

export default config;
