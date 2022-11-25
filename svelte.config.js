import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex-svelte' 

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [
		'.svelte',
		'.svx',
		'.md',
	],

	preprocess: [
		mdsvex({
			extensions: [".md", ".svx"],
			remarkPlugins: [remarkMath],
			rehypePlugins: [rehypeKatex],
		}),
		preprocess(),
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
