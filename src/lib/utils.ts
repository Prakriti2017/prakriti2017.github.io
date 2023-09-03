/* eslint-disable brace-style */
/* eslint-disable-next-line brace-style */

import type { PostMeta } from "$lib/types"

export function getPosts(): PostMeta[] {
	const prefix = "/src/routes/writings/"
	const suffix = "/+page.md"
	const allPostFiles = import.meta.glob("/src/routes/writings/*/+page.md", { eager: true })


	const allPosts = Object.entries(allPostFiles).map(([path, post]: [string, { metadata: PostMeta }]) => {
		const postPath = path.slice(prefix.length, -suffix.length)
		return { ...post.metadata, path: postPath }
	})
	const posts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date))

	return posts
}
