import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'userSlice',
	initialState: { userID: '' },
	reducers: {
		setUserID: (state, action) => {
			state.userID = action.payload.userID;
		},
	},
});

export const { setUserID } = userSlice.actions;
export default userSlice.reducer;
