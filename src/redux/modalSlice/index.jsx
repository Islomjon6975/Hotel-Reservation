import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
	name: 'modalSlice',
	initialState: {
		settingModalVisibility: false,
		langModalVisibility: false,
		logoutModalVisibility: false,
	},
	reducers: {
		setSettingModalVisibility(state) {
			state.settingModalVisibility = !state.settingModalVisibility;
		},
		setLangModalVisibility(state) {
			state.langModalVisibility = !state.langModalVisibility;
		},
		setLogoutModalVisibility(state) {
			state.logoutModalVisibility = !state.logoutModalVisibility;
		},
	},
});

export const { setSettingModalVisibility, setLangModalVisibility, setLogoutModalVisibility } = modalSlice.actions;
export default modalSlice.reducer;
