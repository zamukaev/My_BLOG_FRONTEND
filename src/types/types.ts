export interface IUserData {
	token?: string | null;
	username: string;
	password?: string;
	roles?: string[];
	_id?: string;
	__v?: number;
}
export interface IData {
	data: IUserData | null,
	isLoading: boolean;
	error: null | string;
}

export interface IPost {
	title: string;
	body: string;
	tags: string[];
	_id: string;
	user: IUserData;
	viewsCount: number;
	createdAt: string;
	picture?: string | undefined;
}

export interface PostState {
	posts: IPost[];
	isLoading: boolean;
	error: null | string;
	isActive: boolean;
}

