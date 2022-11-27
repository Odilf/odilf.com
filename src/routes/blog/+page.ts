import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const fetchMarkdownPosts = async () => {
	const postFiles = import.meta.glob('/src/routes/blog/posts/*.md')
	
	const posts = await Promise.all(
		Object.entries(postFiles).map(async ([path, resolver]) => {
			let { title, date } = (await resolver() as any).metadata

			if (title == null || date == null) {
				throw error(500, "Markdown file is not formatted correctly")
			}
  
			return {
				title, 
				date,
				path: path.slice(23, -3),
			}
		})
	)

	return posts.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime()
	})
}

export const load: PageLoad = async () => {
	const posts = fetchMarkdownPosts();

    return {
		posts
	};
};