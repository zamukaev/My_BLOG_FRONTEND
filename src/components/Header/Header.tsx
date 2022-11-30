import { FC, useEffect } from "react";
import { Link } from "react-router-dom"

import Button from '@mui/material/Button';

import Search from "../ui/Search";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchAuthMe } from "../../redux/action-creator/authAction";
import { isAuthSelector } from "../../redux/slices/AuthSlice";
import { RootState } from "../../redux/store";
import { IUserData } from "../../types/types";

import { getIsAuth } from "../../config/token";

import styles from "./Header.module.scss";


const Header: FC = () => {
	const isAuth: boolean = useAppSelector(isAuthSelector);
	const user: IUserData | null = useAppSelector((state: RootState) => state.auth.data);
	const dispatch = useAppDispatch();

	const logout = (): void => {
		localStorage.removeItem('token');
		dispatch(fetchAuthMe());
	}

	useEffect(() => {
		dispatch(fetchAuthMe());
	}, []);

	return (
		<header className={styles.header}>
			<Link to="/" className={styles.logo}>LOGO</Link>
			<div className={styles.search}><Search /></div>
			{
				(isAuth && getIsAuth()) ?
					<div className={styles.left}>
						<span className={styles.user}>
							{user && user!.username}
						</span>
						<Button onClick={logout} color="error" variant="contained">Logout</Button>
					</div>
					:
					<div className={styles.login}>
						<Link to="/login" className={styles.btn} > <Button variant="contained">Login</Button></Link>
						<Link to="/registration" > <Button variant="outlined">registration</Button></Link>
					</div >
			}
		</header>
	);
}

export default Header;