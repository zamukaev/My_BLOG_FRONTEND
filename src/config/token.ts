export const getIsAuth = (): boolean => {

	const isToken: boolean = Boolean(localStorage.getItem("token"));
	return isToken;

};