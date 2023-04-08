import { configureStore } from '@reduxjs/toolkit';
import localesReducer from './localeSlice/index.jsx';
import modalSlice from './modalSlice/index.jsx';

export default configureStore({
	reducer: {
		locale: localesReducer,
		modal: modalSlice,
	},
});
