import { User } from "@/common";
import { createSlice } from "@reduxjs/toolkit";

const initialState: User = {
  name: "",
  email: "",
  password: "",
  avatar: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setData: (state, action) => {
      Object.entries(action.payload).forEach(([key, value]) => {
        state[key as keyof User] = value as string;
      });
    },
  },
});

export const { setData } = userSlice.actions;

export default userSlice.reducer;
