import { useState } from 'react';
import { toast } from 'react-toastify';
import { getUsers, addUser, submitTask } from '@/api/usersApi';

export const useUsers = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchUsers = async () => {
		setLoading(true);
		try {
			const data = await getUsers();
			setData(data);
			setError(null);
		} catch (err) {
			setError('Failed to load users.');
		} finally {
			setLoading(false);
		}
	};

	const createUser = async (payload) => {
		try {
			const newUser = await addUser(payload);
			setData([...data, newUser]);
			toast.success('User has been created.');
		} catch (err) {
			toast.error('Failed to create a user.');
		}
	};

	const submitUserTask = async (data) => {
		try {
			await submitTask(data);
			toast.success('Task has been submitted.');
		} catch (err) {
			toast.error('Failed to submit task.');
		}
	};

	return { data, loading, error, createUser, fetchUsers, submitUserTask };
};
