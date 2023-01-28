import { configureStore } from "@reduxjs/toolkit";
import user from "./user";

export const masterStore = configureStore({
  reducer: {
    user,
  },
});
