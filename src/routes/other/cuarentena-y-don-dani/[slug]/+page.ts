import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const post = await import(`../historias/${params.slug}.md`)
	
	const { titulo, fecha, asignatura } = post.metadata
	const content = post.default

    return {
		titulo,
		content,
		fecha,
		asignatura,
	};
};