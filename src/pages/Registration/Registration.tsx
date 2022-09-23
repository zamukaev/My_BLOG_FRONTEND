import { FC } from 'react'
import MyInput from '../../components/ui/MyInput';

import styles from "./Registration.module.scss";

interface RegistrationProps {

}
const onSubmitHandler = () => {
	console.log('register')
}
const Registration: FC<RegistrationProps> = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Registration</h2>
			<MyInput buttonText="regestration" onClick={onSubmitHandler} />
		</div>
	);
}

export default Registration;