import { configureStore } from "@reduxjs/toolkit";

import postReducer from "./slices/PostSlice";
import authReducer from "./slices/AuthSlice";

export const store = configureStore({
	reducer: {
		posts: postReducer,
		auth: authReducer
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;