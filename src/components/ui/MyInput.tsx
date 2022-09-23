import { FC } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
interface MyInputProps {
	buttonText: string;
	onClick: () => void;

}

const MyInput: FC<MyInputProps> = ({ buttonText, onClick }) => {
	return (
		<Box component="form" sx={
			{
				'& .MuiTextField-root': { m: 1, width: '50ch', },
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}>

			<TextField
				// error
				id="outlined-error"
				label="Error"
				placeholder='username'
				variant='standard'
			/>
			<TextField
				// error
				id="outlined-error-helper-text"
				label="Error"
				placeholder='password'
				helperText="Incorrect entry."
				variant='standard'
			/>
			<Button onClick={onClick} variant="outlined">{buttonText}</Button>
		</Box>
	);
}

export default MyInput;