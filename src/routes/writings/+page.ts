/* eslint-disable brace-style */
/* eslint-disable-next-line brace-style */

import type { PageLoad } from "./$types"
import type { PostMeta } from "$lib/types"



export const load: PageLoad = () => {
	const allPostFiles = import.meta.glob("./*/*.{svx,md}", { eager: true })
	console.log(allPostFiles)

	const allPosts = Object.entries(allPostFiles).map(([path, post]: [string, { metadata: PostMeta }]) => {
		const prefix = "./"
		const suffix = "/+page.md"
		const postPath = path.slice(prefix.length, -suffix.length)
		return { ...post.metadata, path: postPath }
	})
	const posts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date))

	return { posts }
}
