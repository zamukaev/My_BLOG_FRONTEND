import { FC, useState } from "react";
import Post from "../../components/Post/Post";
interface FullPostProps {

}

const FullPost: FC<FullPostProps> = () => {
	// const [isFullPost, setIsFullPost] = useState(true)
	return (
		<div style={{ marginTop: '110px' }}>
			<Post isFullPost />
		</div>
	);
}

export default FullPost;