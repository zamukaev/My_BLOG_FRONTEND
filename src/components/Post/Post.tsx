import { FC } from "react"
import { Link } from "react-router-dom";
import styles from "./Post.module.scss";
interface PostProps {
	isFullPost?: boolean
}

const Post: FC<PostProps> = ({ isFullPost }) => {
	return (
		<Link to='/post/:id' className={styles.post}>
			<section className={styles.header}>
				<div className={styles.image}>
					<img src="https://th.bing.com/th/id/R.c58f902e82dcf5efacf130cc1b1a1cbc?rik=spZlvyN01s%2fzEg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f3%2f4%2fc%2f1434236-beautiful-avatar-movie-wallpaper-hd-1920x1080-download.jpg&ehk=LguF%2fAxGigfCcxUDsm%2bLGl%2f8DaPo81F3FZqles9vOAg%3d&risl=&pid=ImgRaw&r=0" alt="" />
				</div>
				<div className={styles.authorInfos}>
					<div className={styles.avatar}>
						<img src="https://th.bing.com/th/id/OIP.bJST7w-MdfZ5iCCdgX1wCwAAAA?pid=ImgDet&w=400&h=400&rs=1" width={40} alt="avatar" />
					</div>
					<div className={styles.infos}>
						<div className={styles.fullName}>Muslim</div>
						<div className={styles.date}>12.09.2022</div>
					</div>
				</div>
			</section>
			<section className={styles.body}>
				<h2 className={styles.title}>test title</h2>
				{isFullPost && <p className={styles.text}>{'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nihil magnam maxime voluptatum alias qui cumque laudantium impedit culpa corrupti corporis id, modi quisquam ducimus aut, quos atque! Nemo, animi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nihil magnam maxime voluptatum alias qui cumque laudantium impedit culpa corrupti corporis id, modi quisquam ducimus aut, quos atque! Nemo, animi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nihil magnam maxime voluptatum alias qui cumque laudantium impedit culpa corrupti corporis id, modi quisquam ducimus aut, quos atque! Nemo, animi. '}</p>}
			</section>
			<section className={styles.footer}>
				<div className={styles.tags}>#<span>react</span></div>
				<div className={styles.views}>views:<span>0</span></div>
			</section>
		</Link>
	);
}

export default Post;