import React, { FC, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';


import { useAppSelector } from "../../hooks/redux";
import { isAuthSelector } from "../../redux/slices/AuthSlice";

import axios from "../../api/axios";

import styles from "./AddPost.module.scss";


const AddPost: FC = () => {
	const navigate = useNavigate();
	const { id } = useParams();

	const [picture, setPicture] = useState<string>('');
	const [title, setTitle] = useState<string>('');
	const [body, setBody] = useState<string>('');
	const [tags, setTags] = useState<string>('');
	const [imageUrl, setImageUrl] = useState<string>('');
	const [isError, setIsError] = useState<string | null>(null);

	const isAuth = useAppSelector(isAuthSelector);

	const isEdit = Boolean(id);

	const handleChangeFile = async (event: any) => {
		try {
			const file = event.target.files[0];
			const formData = new FormData();
			formData.append("picture", file);
			const { data } = await axios.post("api/upload", formData);
			setPicture(data);
		} catch (error) {
			alert(error)
		}
	}

	const onSubmitHandler = async () => {
		const files = {
			title,
			body,
			tags,
			picture
		};

		const { data } = isEdit ? (await axios.put(`api/posts/${id}`, files)) : (await axios.post("api/posts", files));

		navigate(`/post/${data._id}`);
	}

	useEffect(() => {
		if (isEdit) {
			try {
				axios.get(`/api/posts/${id}`)
					.then(res => res.data)
					.then(data => {
						setTitle(data.title)
						setBody(data.body)
						setTags(data.tags)
						setPicture(data.picture);
					});
			} catch (error: any) {
				setIsError(error.message);
			}
		}
	}, []);


	if (!isAuth && !localStorage.getItem("token")) {
		return <Navigate to="/login" />
	}

	if (isError) {
		alert(isError)
	}

	return (
		<form className={styles.addPostContainer} >
			<div className={styles.buttons}>
				<Button onChange={handleChangeFile} className={styles.upload} variant="contained" component="label">
					Upload
					<input hidden accept="image/*" multiple type="file" />
				</Button>
				{
					picture &&
					<Button onClick={() => setPicture("")} variant="contained" color="error" component="label">
						Delete
					</Button>
				}
			</div>
			{
				picture &&
				<div>
					<img className={styles.image} src={picture && `http://localhost:3001/${picture}`} alt="" />
				</div>
			}
			<TextField
				onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTags(event.target.value)}
				className={styles.tagInput}
				id="outlined-basic"
				label="Tags"
				variant="outlined"
				value={tags}
			/>


			<TextField
				onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
				className={styles.titleInput}
				id="outlined-basic"
				label="Title"
				variant="outlined"
				value={title}
			/>

			<TextareaAutosize
				onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setBody(event.target.value)}
				className={styles.text}
				aria-label="minimum height"
				minRows={6}
				placeholder="Write text"
				value={body}
			/>
			<Button onClick={onSubmitHandler} className={styles.submitBtn} variant="contained">Post</Button>
		</form >
	);
}

export default AddPost;