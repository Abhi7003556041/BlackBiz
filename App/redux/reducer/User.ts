import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { ProfileResponseData } from '../../Models/AuthModel';

interface UserState {
  loginStatus: boolean;
  userData: ProfileResponseData | null | undefined;
}

const initialState: UserState = {
  loginStatus: false,
  userData: null,
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<ProfileResponseData | null>) {
      state.userData = action.payload;
      state.loginStatus = true;
    },
    logOut(state) {
      state.userData = null;
      state.loginStatus = false;
    },
  },
});
export const {setUser, logOut} = UserSlice.actions;

export default UserSlice.reducer;
