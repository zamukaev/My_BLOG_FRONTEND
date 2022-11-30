import { FC, memo } from "react";

import Button from '@mui/material/Button';

import { Link } from "react-router-dom";

const MyButton: FC = () => {
	return (
		<Link to="/add-post" style={{
			position: 'fixed',
			zIndex: '100',
			top: '126px',
			right: '100px'
		}}>
			<Button variant="contained">ADD A POST</Button>
		</Link>
	);
}

export default memo(MyButton);