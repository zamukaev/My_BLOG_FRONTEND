import { FC } from "react"
import { Link } from "react-router-dom";

import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import classNames from "classnames";

import { setIsActive } from "../../redux/slices/PostSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/redux";
import { useParserDate } from "../../hooks/useParserDate";
import { IUserData } from "../../types/types";

import styles from "./Post.module.scss";

interface PostProps {
	isFullPost?: boolean;
	tag: string[];
	id: string;
	title: string;
	user: IUserData;
	body: string;
	picture: string | undefined;
	viewsCount?: number;
	createdTime: string;
}

const Post: FC<PostProps> = ({ isFullPost, id, body, tag, title, user, viewsCount, createdTime, picture }) => {

	const dispatch = useDispatch()
	const userId = useAppSelector((state) => state.auth.data?._id);
	const date = useParserDate(createdTime);

	const onDeleteHandler = () => {
		dispatch(setIsActive(true));
	}

	return (
		<div className={classNames(styles.post, { [styles.fullPost]: isFullPost })}>
			<div className={styles.authorInfos}>
				<div className={styles.avatar}>
					<img src="https://th.bing.com/th/id/OIP.bJST7w-MdfZ5iCCdgX1wCwAAAA?pid=ImgDet&w=400&h=400&rs=1" width={40} alt="avatar" />
				</div>
				<div className={styles.infos}>
					<div className={styles.fullName}>{user?.username}</div>
					<div className={styles.date}>{date}</div>
				</div>
			</div>

			<div className={isFullPost ? styles.fullImage : styles.image}>
				<img src={picture
					?
					`http://localhost:3001/${picture && picture}`
					:
					"https://jaws-prod.cdn.pbs.org/1.38.0/tvss/img/no-image-available.jpg"}
					alt="" />
			</div>

			{user && ((user._id === userId) === isFullPost) &&
				<div className={styles.options}>
					<Link to={`/post/${id && id}/edit`}><EditIcon className={styles.edit} color="secondary" /></Link>
					<DeleteForeverIcon className={styles.delete} color="secondary" onClick={onDeleteHandler} />
				</div>
			}
			<div className={styles.content}>
				<Link to={`/post/${id}`} className={styles.body}>
					<h2 className={styles.title}>{title}</h2>
					{isFullPost &&
						<p className={styles.text}>
							{body}
						</p>}
				</Link>

				<div className={styles.footer}>
					{tag && tag.map(item => <div onClick={(() => console.log("ok"))} key={item} className={styles.tags}>#<span>{item}</span></div>)}
					<div className={styles.views}>views:<span>{viewsCount && viewsCount}</span></div>
				</div>
			</div>

		</div>
	);
}

export default Post;