export const useParserDate = (date: string | undefined) => {

	const createDate = date?.split("T", 1).join("").split("-").join(".");
	return createDate;

}