import { FC } from "react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

interface MyButtonProps {
}

const MyButton: FC<MyButtonProps> = () => {
	return (
		<Link to="/add-post" style={{
			position: 'fixed',
			zIndex: '100px',
			top: '126px',
			right: '100px'
		}}>
			<Button variant="contained">ADD A POST</Button>
		</Link>
	);
}

export default MyButton;