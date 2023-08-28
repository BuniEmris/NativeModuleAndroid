import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '..';

interface UserState {
  isLogin: boolean;
}

const initialState: UserState = {
  isLogin: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLogin: (state: {isLogin: any}, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    revokeUser: () => initialState,
  },
});

export const {setIsLogin, revokeUser} = userSlice.actions;

const selectUser = (state: RootState) => state.user;
export const selectUserData = createSelector(selectUser, (user: any) => {
  return user;
});
export default userSlice.reducer;
