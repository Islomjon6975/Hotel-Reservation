import axios from 'axios';
import React, { useState, useContext, createContext } from 'react';

const { REACT_APP_BASE_URL } = process.env;

const authContext = createContext();

export function ProviderAuth({ children }) {
	const auth = useProviderAuth();
	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
	return useContext(authContext);
};

function useProviderAuth() {
	const [user, setUser] = useState(null);
	const [errors, setErrors] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	function signin(number, password) {
		setIsLoading(true);
		axios({
			url: `${REACT_APP_BASE_URL}/user/sign-in`,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			data: {
				password: password,
				phoneNumber: '+998' + number,
			},
		})
			.then(response => {
				setIsLoading(false);
				if (response.ok) {
					setUser(response.user);
				}
			})
			.catch(error => setErrors(error));
	}

	function signup(signUpData) {
		setErrors([]);
		setIsLoading(true);
		axios({
			url: `${REACT_APP_BASE_URL}/user/sign-up`,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			data: {
				...signUpData,
			},
		})
			.then(response => {
				setIsLoading(false);
				if (response.ok) {
					setUser(response.user);
				}
			})
			.catch(error => setErrors(error));
	}

	return {
		user,
		signin,
		signup,
		errors,
		isLoading,
	};
}
