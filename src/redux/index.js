import { configureStore } from '@reduxjs/toolkit';
import localesReducer from './localeSlice/index.jsx';
import modalSlice from './modalSlice/index.jsx';
import parametersSlice from './parametersSlice/index.jsx';
import userSlice from './userSlice/index.js';

export default configureStore({
	reducer: {
		locale: localesReducer,
		modal: modalSlice,
		parametersSlice: parametersSlice,
		user: userSlice,
	},
});
