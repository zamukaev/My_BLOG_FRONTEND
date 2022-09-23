import { FC } from "react";
import Post from "../../components/Post/Post";
import MyButton from "../../components/ui/MyButton";
import styles from "./Home.module.scss";

interface HomeProps {

}

const Home: FC<HomeProps> = () => {
	return (<div className={styles.container}>
		<MyButton />
		<Post />
		<Post />
		<Post />
		<Post />
		<Post />
		<Post />
		<Post />
	</div>);
}

export default Home;