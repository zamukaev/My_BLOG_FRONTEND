import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchAuthMe, fetchRegisterUser, fetchUserData } from "../action-creator/authAction";
import { IData, IUserData } from "../../types/types";

const initialState: IData = {
	data: null,
	isLoading: true,
	error: null,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: {
		//login
		[fetchUserData.pending.type]: (state: IData) => {
			state.isLoading = true;
			state.error = null;
			state.data = null;
		},
		[fetchUserData.fulfilled.type]: (state: IData, action: PayloadAction<IUserData>) => {
			state.isLoading = false;
			state.error = null;
			state.data = action.payload;
		},
		[fetchUserData.rejected.type]: (state: IData, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = action.payload;
			state.data = null;
		},

		//register
		[fetchRegisterUser.pending.type]: (state: IData) => {
			state.isLoading = true;
			state.error = null;
			state.data = null;
		},
		[fetchRegisterUser.fulfilled.type]: (state: IData, action: PayloadAction<IUserData>) => {
			state.isLoading = false;
			state.error = null;
			state.data = action.payload;
		},
		[fetchRegisterUser.rejected.type]: (state: IData, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = action.payload;
			state.data = null;
		},

		// authMe
		[fetchAuthMe.pending.type]: (state: IData) => {
			state.isLoading = true;
			state.error = null;
			state.data = null;
		},
		[fetchAuthMe.fulfilled.type]: (state: IData, action: PayloadAction<IUserData>) => {
			state.isLoading = false;
			state.error = null;
			state.data = action.payload;
		},
		[fetchAuthMe.rejected.type]: (state: IData, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = action.payload;
			state.data = null;
		},
	}

});

export default authSlice.reducer;
export const isAuthSelector = (state: any) => Boolean(state.auth.data);