/* eslint-disable brace-style */
/* eslint-disable-next-line brace-style */

import type { PageLoad } from "./$types"
import { getPosts } from "$lib/utils"


export const load: PageLoad = async () => {
	return { posts: getPosts() }
}
