import type { PageLoad } from './$types';

import { projects } from "./projects";

export const load: PageLoad = ({ params }) => {
	return {
		projects
	}
}