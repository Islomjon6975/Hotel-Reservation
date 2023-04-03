import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import { useAuth } from '../hooks/useAuth';

const Root = () => {
	const { user } = useAuth();

	return (
		<Routes>
			<Route path='/' element={<Navbar />}>
				<Route index element={<Home />} />
			</Route>
			<Route path='/login' element={<Login />} />
		</Routes>
	);
};

export default Root;
