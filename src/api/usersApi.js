import axios from 'axios';

const API_URL = import.meta.env.VITE_SERVER_URL;

export const getUsers = async () => {
	const response = await axios.get(`${API_URL}/api/user/list`);
	return response.data;
};

export const addUser = async (data) => {
	const response = await axios.post(`${API_URL}/api/user/create`, data);
	return response.data;
};

export const submitTask = async (data) => {
	const response = await axios.post(
		`${API_URL}/api/user/submit-challenge`,
		data
	);
	return response.data;
};
