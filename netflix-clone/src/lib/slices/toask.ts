import { createSlice } from "@reduxjs/toolkit";

interface IToask {
  id?: number 
}

const initialState: IToask = {
  id: undefined,
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setId(state, action) {
      state.id = action.payload
    }
  }
})

export const { setId } = toastSlice.actions

export const { reducer: toastReducer } = toastSlice; 
