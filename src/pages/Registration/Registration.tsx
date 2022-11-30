import { FC } from 'react';

import { Navigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchRegisterUser } from '../../redux/action-creator/authAction';
import { IUserData } from '../../types/types';

import styles from "./Registration.module.scss";

type FormData = {
	username: string;
	password: string;
};

const Registration: FC = () => {
	const dispatch = useAppDispatch();
	const { data, error, isLoading } = useAppSelector(state => state.auth);
	const { register, setValue, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
		defaultValues: {
			username: '',
			password: ''
		},
		mode: 'onChange'
	});

	const onSubmitHandler = (values: IUserData) => {
		dispatch(fetchRegisterUser(values));
	};

	if (data) {
		return < Navigate to="/login" />
	}

	return (
		<form onSubmit={handleSubmit(onSubmitHandler)} className={styles.container}>
			<h2 className={styles.title}>Registration</h2>
			<TextField
				type="input"
				error={Boolean(errors.username?.message)}
				className={styles.username}
				id="outlined-name"
				label="Username"
				helperText={errors.username?.message}
				fullWidth
				{...register('username', { required: 'Geben Sie Username ein', minLength: 3 })}
			/>
			<TextField
				type="input"
				className={styles.password}
				error={Boolean(errors.password?.message)}
				id="outlined-uncontrolled"
				label="Password"
				helperText={errors.password?.message}
				fullWidth
				{...register('password', { required: 'Geben Sie Password ein', minLength: 6 })}
			/>
			<Button type='submit' variant="contained">
				Registration
			</Button>
		</form>
	);
}

export default Registration;