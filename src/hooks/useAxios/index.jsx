import axios from 'axios';

const { REACT_APP_BASE_URL } = process.env;

export const useAxios = () => {
	return async ({ url, method = 'GET', body, headers }) => {
		return await axios({
			url: `${REACT_APP_BASE_URL}${url}`,
			method,
			data: JSON.stringify({
				...body,
			}),
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
				'Content-Type': 'application/json',
				'Allow-Control-Origin': true,
				...headers,
			},
		})
			.then(response => response)
			.catch(error => error);
	};
};
