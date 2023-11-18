import { configureStore } from "@reduxjs/toolkit";
import { toastReducer, userReducer } from "../slices";

const store = configureStore({
  reducer: {
    user: userReducer,
    toask: toastReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
