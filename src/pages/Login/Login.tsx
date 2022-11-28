import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useForm } from "react-hook-form";

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { isAuthSelector } from '../../redux/slices/AuthSlice';
import { fetchUserData } from '../../redux/action-creator/authAction';
import { IUserData } from '../../types/types';

import styles from "./Login.module.scss";

type FormData = {
	username: string;
	password: string;
};

const Login: FC = () => {
	const dispatch = useAppDispatch();
	const isAuth: boolean = useAppSelector(isAuthSelector);

	const { register, setValue, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
		defaultValues: {
			username: '',
			password: ''
		},
		mode: 'onChange'
	});

	const onSubmitHandler = async (values: IUserData) => {
		const data = await dispatch(fetchUserData(values));
		if (!data.payload) {
			alert('fehler beim einlogen');
		}
		if ('token' in data.payload) {
			localStorage.setItem('token', data.payload.token)
		}
	};

	if (localStorage.getItem('token') && isAuth) {

		return <Navigate to="/" />
	}
	console.log(errors)
	return (
		<form onSubmit={handleSubmit(onSubmitHandler)} className={styles.container}>
			<h2 className={styles.title}>Login</h2>
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
				error={!!errors.password?.message}
				id="outlined-uncontrolled"
				label="Password"
				helperText={errors.password?.message}
				fullWidth
				{...register('password', { required: 'Geben Sie Password ein', minLength: 6 })}
			/>
			<Button type='submit' variant="contained">
				Login
			</Button>
		</form>
	);
}

export default Login;