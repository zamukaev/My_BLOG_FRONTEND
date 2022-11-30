import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchPosts, fetchPostsByTag, fetchRemovePost } from '../action-creator/authAction';
import { IPost, PostState } from '../../types/types';


const initialState: PostState = {
	posts: [],
	isLoading: true,
	error: null,
	isActive: false,
	filteredValue: '',
}


export const postSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		setIsActive: (state: PostState, action: PayloadAction<boolean>) => {
			state.isActive = action.payload;
		},
		setFilterData: (state: PostState, action: PayloadAction<string>) => {
			state.filteredValue = action.payload;
		}
	},
	extraReducers: {
		//get All posts
		[fetchPosts.pending.type]: (state: PostState) => {
			state.error = null;
			state.isLoading = true;
			state.posts = [];
		},
		[fetchPosts.fulfilled.type]: (state: PostState, action: PayloadAction<IPost[]>) => {
			state.error = null;
			state.isLoading = false;
			state.posts = action.payload;
		},
		[fetchPosts.rejected.type]: (state: PostState, action: PayloadAction<string>) => {
			state.error = action.payload;
			state.isLoading = false;
			state.posts = [];
		},
		//get Post ByTag
		[fetchPostsByTag.pending.type]: (state: PostState) => {
			state.error = null;
			state.isLoading = true;
			state.posts = [];
		},
		[fetchPostsByTag.fulfilled.type]: (state: PostState, action: PayloadAction<IPost[]>) => {
			state.error = null;
			state.isLoading = false;
			state.posts = action.payload;
		},
		[fetchPostsByTag.rejected.type]: (state: PostState, action: PayloadAction<string>) => {
			state.error = action.payload;
			state.isLoading = false;
			state.posts = [];
		},
		// fetchRemovePost
		[fetchRemovePost.fulfilled.type]: (state: PostState, action: PayloadAction<IPost>) => {
			state.posts = state.posts.filter(obj => obj._id !== action.payload._id);
			state.error = null;
			state.isLoading = false;
		},
		[fetchRemovePost.rejected.type]: (state: PostState, action: PayloadAction<string>) => {
			state.error = action.payload;
		},
	}

});
export const { setIsActive, setFilterData } = postSlice.actions;
export default postSlice.reducer;