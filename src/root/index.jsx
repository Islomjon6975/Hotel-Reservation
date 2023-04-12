import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { RequireAuth } from 'react-auth-kit';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import { en } from '../utils/locales/en/translation';
import { ru } from '../utils/locales/ru/translation';
import { uzLotin } from '../utils/locales/uzLotin/translation';
import { uzKrill } from '../utils/locales/uzKrill/translation';
import { useSelector } from 'react-redux';
import { paths } from '../utils/paths';

const Root = () => {
	const { lang } = useSelector(state => state.locale);

	useEffect(() => {
		if (!localStorage.getItem('locale')) {
			localStorage.setItem('locale', 'uzLotin');
		}
	}, []);

	i18n
		.use(initReactI18next) // passes i18n down to react-i18next
		.init({
			resources: {
				en: {
					translation: en,
				},
				ru: {
					translation: ru,
				},
				uzLotin: {
					translation: uzLotin,
				},
				uzKrill: {
					translation: uzKrill,
				},
			},
			lng: lang,
			fallback: lang,
			interpolation: {
				escapeValue: false, // react already safes from xss
			},
		});

	return (
		<Routes>
			<Route
				path='/'
				element={
					<RequireAuth loginPath={'/login'}>
						<Navbar />
					</RequireAuth>
				}>
				{paths.map(({ id, Component, path, hasChild, children }) => {
					return !hasChild ? (
						<Route key={id} path={path} element={<Component />} />
					) : (
						<Route key={id} path={path} element={<Component />}>
							{children.map(({ id, Component, path, hasChild, children }) => {
								return !hasChild ? (
									<Route key={id} path={path} element={<Component />} />
								) : (
									<Route Route key={id} path={path} element={<Component />}>
										{children.map(({ id, Component, path, hasChild, children }) => (
											<Route key={id} path={path} element={<Component />} />
										))}
									</Route>
								);
							})}
						</Route>
					);
				})}
			</Route>
			<Route path='/login' element={<Login />} />
			<Route path='*' element={<h1>Not found</h1>} />
		</Routes>
	);
};

export default Root;
