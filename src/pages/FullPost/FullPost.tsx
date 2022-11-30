import { FC, useState, useEffect, useCallback, memo } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Post from "../../components/Post/Post";
import PopUp from "../../components/ui/PopUp/PopUp";
import FullPostLoader from "./FullPostLoader";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setIsActive } from "../../redux/slices/PostSlice";
import { fetchRemovePost } from "../../redux/action-creator/authAction";
import { IPost } from "../../types/types";

import axios from "../../api/axios";


const FullPost: FC = () => {

	const [post, setPost] = useState<IPost>();
	const [isLoaded, setIsloaded] = useState<boolean>(true);
	const [isError, setIsError] = useState<string | null>(null);

	const { id } = useParams();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { isActive } = useAppSelector(state => state.posts);

	useEffect(() => {
		fetchPostById(id);
	}, []);

	const onDeleteHandler = useCallback((): void => {
		dispatch(fetchRemovePost(id));
		dispatch(setIsActive(false));
		navigate("/");
	}, [id, isActive]);

	const onCancelHandler = useCallback((): void => {
		dispatch(setIsActive(false));
	}, [isActive]);

	const fetchPostById = async (id: string | undefined) => {
		try {
			setIsloaded(true);
			const { data } = await axios.get(`/api/post/${id}`);
			setIsloaded(false);
			setPost(data);

		} catch (error: any) {
			setIsError(error.message)
		}
	}
	if (isError) {
		dispatch(setIsActive(true));
	}

	return (
		<>
			<PopUp
				isActive={isActive}
				onCancelHandler={onCancelHandler}
				onDeleteHandler={onDeleteHandler}
				error={isError && isError} />
			{
				isLoaded ? <FullPostLoader /> : <Post
					isFullPost={id ? true : false}
					title={post!.title}
					tag={post!.tags}
					body={post!.body}
					user={post!.user}
					id={post!._id}
					viewsCount={post!.viewsCount}
					createdTime={post!.createdAt}
					picture={post?.picture}
				/>
			}

		</>
	);
}

export default memo(FullPost);