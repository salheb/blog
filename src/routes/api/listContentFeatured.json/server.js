// import { json } from '@sveltejs/kit';
import { listContent, listContentFeatured } from '$lib/content';

/**
 * @type {import('./$types').RequestHandler}
 */
export async function GET({ fetch, setHeaders }) {
	let list = await listContentFeatured(fetch);
	list = list.map((item) => {
		item.description = item.description.replace(/[[\]]/gm, ' ')
		return item
	});
	setHeaders({
		'Cache-Control': `public, max-age=3600` // 1 hour
	});
	return new Response(JSON.stringify(list), {
		headers: {
			'content-type': 'application/json; charset=utf-8'
		}
	});
}
