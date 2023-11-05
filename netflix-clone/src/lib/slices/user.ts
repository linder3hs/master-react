import { User } from "@/common";
import { createSlice } from "@reduxjs/toolkit";

const initialState: User = {
  name: "",
  email: "",
  password: "",
  avatar: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setData: (state, action) => {
      state = { ...state, ...action.payload };
    },
  },
});

export const { setData } = userSlice.actions;

export default userSlice.reducer;
