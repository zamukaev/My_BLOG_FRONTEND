import * as React from 'react';

import TextField from '@mui/material/TextField';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setFilterData } from '../../redux/slices/PostSlice';

function FormPropsTextFields() {

	const dispatch = useAppDispatch();
	const { filteredValue } = useAppSelector(state => state.posts);

	const onChange = React.useCallback((value: string) => {
		dispatch(setFilterData(value));
	}, [])

	return (
		<form>
			<TextField
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
				style={{ width: '100%' }}
				id="standard-search"
				label="Search field"
				type="search"
				variant="standard"
				value={filteredValue}
			/>
		</form>

	);
}
export default React.memo(FormPropsTextFields);