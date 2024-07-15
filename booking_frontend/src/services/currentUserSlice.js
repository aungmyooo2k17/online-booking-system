import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    saveCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    removeCurrentUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { saveCurrentUser, removeCurrentUser } = currentUserSlice.actions;
export default currentUserSlice;
