import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { RequireAuth } from 'react-auth-kit';
import Home from '../components/Home';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import BuildingTypes from '../components/BuildingTypes';
import OrdinaryRooms from '../components/BuildingTypes/OrdinaryRooms';
import LuxuryRooms from '../components/BuildingTypes/LuxuryRooms';
import Cottages from '../components/BuildingTypes/Cottages';
import { en } from '../utils/locales/en/translation';
import { ru } from '../utils/locales/ru/translation';
import { uzLotin } from '../utils/locales/uzLotin/translation';
import { uzKrill } from '../utils/locales/uzKrill/translation';
import { useSelector } from 'react-redux';

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
				<Route index element={<Home />} />
				<Route path='/building-control' element={<BuildingTypes />} />
				<Route path='building-control/ordinary-rooms' element={<OrdinaryRooms />} />
				<Route path='building-control/luxury-rooms' element={<LuxuryRooms />} />
				<Route path='building-control/map/cottage' element={<Cottages />} />
			</Route>
			<Route path='/login' element={<Login />} />
		</Routes>
	);
};

export default Root;
