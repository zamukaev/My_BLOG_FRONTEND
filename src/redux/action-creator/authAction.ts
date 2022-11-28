import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../api/axios";
import { IPost, IUserData } from "../../types/types";

export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (params: IUserData, thunkApi) => {
	try {
		const { data } = await axios.post('auth/login', params);
		return data
	} catch (error: any) {
		return thunkApi.rejectWithValue(error.message)
	}
});

export const fetchRegisterUser = createAsyncThunk('auth/fetchRegisterUser', async (params: IUserData, thunkApi) => {
	try {
		const { data } = await axios.post('auth/registration', params);
		return data
	} catch (error: any) {
		return thunkApi.rejectWithValue(error.message)
	}
});

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async (_, thunkApi) => {
	try {
		const { data } = await axios.get('auth/authMe');
		return data;
	} catch (error: any) {
		return thunkApi.rejectWithValue(error.message);
	}
});

//post actions
//get all posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, thunkApi) => {
	try {
		const { data } = await axios.get('/api/posts');
		return data
	} catch (error: any) {
		return thunkApi.rejectWithValue(error.message)
	}
});
//delete a post
export const fetchRemovePost = createAsyncThunk(`posts/fetchRemovePost`, async (id: string | undefined, thunkApi) => {
	try {
		const { data } = await axios.delete(`/api/posts/${id}`);
		return data;
	} catch (error: any) {
		return thunkApi.rejectWithValue(error.message)
	}

});