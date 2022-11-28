import { FC, useEffect } from "react";
import Post from "../../components/Post/Post";
import PostLoader from "../../components/Post/PostLoader";
import MyButton from "../../components/ui/MyButton";
import PopUp from "../../components/ui/PopUp/PopUp";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchPosts } from "../../redux/action-creator/authAction";
import { setIsActive } from "../../redux/slices/PostSlice";
import { IPost } from "../../types/types";

const loaderArray: number[] = [1, 2, 3, 4, 5, 6];
const Home: FC = () => {
	const dispatch = useAppDispatch();
	const { error, isLoading, posts, isActive } = useAppSelector(state => state.posts);
	if (error) {
		dispatch(setIsActive(true));
	};
	useEffect(() => {
		dispatch(fetchPosts());

		dispatch(setIsActive(false));
	}, []);
	return (
		<>
			<MyButton />
			<PopUp isActive={isActive} error={error && error} />
			{
				isLoading
					?
					loaderArray.map(item => <PostLoader key={item} />)
					: posts.map((post: IPost) => (
						<Post
							key={post?._id}
							tag={post?.tags}
							title={post?.title}
							body={post?.body}
							id={post?._id}
							user={post?.user}
							viewsCount={post?.viewsCount}
							createdTime={post?.createdAt}
							picture={post.picture}
						/>
					))
			}
		</>
	);
}

export default Home;