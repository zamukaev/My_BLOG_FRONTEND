import axios from 'axios';
const instance = axios.create({
	baseURL: 'https://my-blog-backend-q2ti.vercel.app/',
});
instance.interceptors.request.use((config) => {
	config.headers.Authorization = localStorage.getItem('token');

	return config;
});

export default instance;