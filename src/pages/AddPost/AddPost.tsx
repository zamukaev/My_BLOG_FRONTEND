import React, { FC } from "react";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import styles from "./AddPost.module.scss";
interface AddPostProps {

}

const AddPost: FC<AddPostProps> = () => {
	return (
		<form className={styles.addPostContainer} >
			<Button className={styles.upload} variant="contained" component="label">
				Upload
				<input hidden accept="image/*" multiple type="file" />
			</Button>
			<TextField className={styles.tagInput} id="outlined-basic" label="Tags" variant="outlined" />
			<TextField className={styles.titleInput} id="outlined-basic" label="Title" variant="outlined" />
			<TextareaAutosize
				className={styles.text}
				aria-label="minimum height"
				minRows={6}
				placeholder="Write text"
			/>
			<Button className={styles.submitBtn} variant="contained">Post</Button>
		</form >
	);
}

export default AddPost;