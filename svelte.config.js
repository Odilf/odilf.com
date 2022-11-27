import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex-svelte' 
import remarkGfm from 'remark-gfm';
import remarkFootnotes from 'remark-footnotes';
import addClasses from 'rehype-add-classes';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [
		'.svelte',
		'.md',
	],

	preprocess: [
		mdsvex({
			extensions: [".md"],
			remarkPlugins: [
				remarkFootnotes,
				remarkGfm, 
				remarkMath,
			],
			rehypePlugins: [
				rehypeKatex,
				[addClasses, { p: 'md-p', ul: 'md-ul', ol: 'md-ol', li: 'md-li', 'h1,h2,h3': 'md-heading' }],
			],
		}),

		preprocess(),
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
