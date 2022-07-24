import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	user: null
}

const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload
		}
	}
})

export const { setUser } = auth.actions
export default auth.reducer
