import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
	const onChange = (value: string) => {
		console.log(value);
	}
	return (
		<form>
			<TextField
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
				style={{ width: '100%' }}
				id="standard-search"
				label="Search field"
				type="search"
				variant="standard"
			/>
		</form>

	);
}