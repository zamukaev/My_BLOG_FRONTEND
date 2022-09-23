import { FC } from "react";
import Button from '@mui/material/Button';
import styles from "./Header.module.scss";
import Search from "../ui/Search";

import { Link } from "react-router-dom"
interface HeaderProps {

}

const Header: FC<HeaderProps> = () => {
	return (
		<header className={styles.header}>
			<Link to="/" className={styles.logo}>LOGO</Link>
			<div className={styles.search}><Search /></div>
			<div className={styles.login}>
				<Link to="/login" className={styles.btn} > <Button variant="outlined">Login</Button></Link>
				<Link to="/registration" > <Button variant="outlined">registration</Button></Link>
			</div >

		</header>
	);
}

export default Header;