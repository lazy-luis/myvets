import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    userDetails: {
      Full_Name: "",
      Email: "",
      Admin_Type: "",
    },
  },
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

export const { setUserDetails } = user.actions;

export default user.reducer;
