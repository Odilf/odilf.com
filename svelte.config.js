import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

import { mdsvex } from 'mdsvex'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex-svelte'
import addClasses from 'rehype-add-classes';
import rehypeSlug from 'rehype-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [
		'.svelte',
		'.md',
	],

	preprocess: [
		mdsvex({
			layout: "src/lib/article/MarkdownLayout.svelte",
			extensions: [".md"],
			remarkPlugins: [
				remarkMath,
			],
			rehypePlugins: [
				rehypeKatex,
				[addClasses, { 'h1,h2,h3,h4,h5,h6': 'heading', a: 'link' }],
				rehypeSlug,
			],
		}),

		preprocess(),
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
