import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const fetchMarkdownPosts = async () => {
	const postFiles = import.meta.glob('/src/routes/other/cuarentena-y-don-dani/historias/*.md')
	
	const posts = await Promise.all(
		Object.entries(postFiles).map(async ([path, resolver]) => {
			const resolved = await resolver() as any

			if (resolved == null) {
				throw error(500, `Markdown does not have metadata (${path})`)
			}

			const { titulo, fecha, asignatura } = resolved.metadata			
			
			if (titulo == null || fecha == null || asignatura == null) {
				throw error(500, `Markdown does not have title or date (${path})`)
			}
  
			return {
				titulo, 
				fecha,
				asignatura,
				path: path.slice(50, -3),
			}
		})
	)

	return posts.sort((a, b) => {
		return new Date(a.fecha).getTime() - new Date(b.fecha).getTime()
	})
}

export const load: PageLoad = async () => {
	const stories = fetchMarkdownPosts();

    return {
		stories
	};
};