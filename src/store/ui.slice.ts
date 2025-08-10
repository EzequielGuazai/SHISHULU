import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "isNavOpened",
  initialState: {
    isOpened: false,
  },
  reducers: {
    toggle(state) {
      state.isOpened = !state.isOpened;
    },
    close(state) {
      state.isOpened = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
