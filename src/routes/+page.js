import { error } from '@sveltejs/kit';

// export const prerender = true; // turned off bc it causes errors

export async function load({ setHeaders, fetch }) {
  const res = await fetch(`/api/listContent.json`);
  // alternate strategy https://www.davidwparker.com/posts/how-to-make-an-rss-feed-in-sveltekit
  // Object.entries(import.meta.glob('./*.md')).map(async ([path, page]) => {
  if (res.status > 400) {
    throw error(res.status, await res.text());
  }

  /** @type {import('$lib/types').ContentItem[]} */
  const items = await res.json();

  const res_featured = await fetch(`/api/listContentFeatured.json`);
  // alternate strategy https://www.davidwparker.com/posts/how-to-make-an-rss-feed-in-sveltekit
  // Object.entries(import.meta.glob('./*.md')).map(async ([path, page]) => {
  if (res_featured.status > 400) {
    throw error(res_featured.status, await res_featured.text());
  }

  /** @type {import('$lib/types').ContentItem[]} */
  const featured = await res.json();

  //listContentFeatured
  setHeaders({
    'cache-control': `public, max-age=3600`, // 1 hour
  });
  return { items: items.slice(0, 10), featured: featured.slice(0, 3)};
}
