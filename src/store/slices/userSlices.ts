import { createSlice } from "@reduxjs/toolkit";

interface UserData {
  id: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
}

interface UserState {
  userData: UserData | null;
}

const initialState: UserState = {
  userData: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    create(state, action) {
      state.userData = action.payload;
    },
  },
});

export const { create } = userSlice.actions;

export default userSlice.reducer;
