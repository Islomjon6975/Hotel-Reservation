import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import { RequireAuth } from 'react-auth-kit';

const Root = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<RequireAuth loginPath={'/login'}>
						<Navbar />
					</RequireAuth>
				}>
				<Route index element={<Home />} />
			</Route>
			<Route path='/login' element={<Login />} />
		</Routes>
	);
};

export default Root;
