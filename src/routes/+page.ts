/* eslint-disable-next-line brace-style */
/* eslint-disable brace-style */

import type { PageLoad } from "./$types"
import { getPosts } from "$lib/utils"


export const load: PageLoad = () => {
	return { posts: getPosts() }
}
