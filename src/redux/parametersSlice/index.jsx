import { createSlice } from '@reduxjs/toolkit';

export const parametersSlice = createSlice({
	name: 'paramatersSlice',
	initialState: {
		priceInfo: true,
		dateInfo: true,
	},
	reducers: {
		setParametersSlice: (state, action) => {
			state.priceInfo = action.payload.placeInfo;
			state.dateInfo = action.payload.dateInfo;
		},
	},
});

export const { setParametersSlice } = parametersSlice.actions;
export default parametersSlice.reducer;
