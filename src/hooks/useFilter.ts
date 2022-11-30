import { IPost } from "../types/types";

export const useFilter = (data: string | null, posts: IPost[]) => {
	if (data) {
		const filteredPosts = posts.filter(post => post.title.toLocaleUpperCase().includes(data.toLocaleUpperCase()));
		return filteredPosts;
	}
}