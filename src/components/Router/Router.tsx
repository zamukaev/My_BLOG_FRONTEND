import { FC } from "react";

import { Routes, Route } from "react-router-dom"
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Registration from "../../pages/Registration/Registration";
import FullPost from "../../pages/FullPost/FullPost";
import AddPost from "../../pages/AddPost/AddPost";
import Layout from "../Layout/Layout";
import Header from "../Header/Header";
const Router: FC = () => {
	return (
		<Layout>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/registration" element={<Registration />} />
				<Route path="/post/:id" element={<FullPost />} />
				<Route path="/add-post/" element={<AddPost />} />
				<Route path="/post/:id/edit" element={<AddPost />} />
			</Routes>
		</Layout>

	);
}

export default Router;