import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/user";
import toastReducer from "../slices/toask"

const store = configureStore({
  reducer: {
    user: userReducer,
    toask: toastReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
