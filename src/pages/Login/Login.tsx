import { FC } from 'react';
import MyInput from '../../components/ui/MyInput';

import styles from "./Login.module.scss";

interface LoginProps {

}

const Login: FC<LoginProps> = () => {
	const onSubmitHandler = () => {
		console.log('login')
	}
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Login</h2>
			<MyInput buttonText='login' onClick={onSubmitHandler} />
		</div>
	);
}

export default Login;