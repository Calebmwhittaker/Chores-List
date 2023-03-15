import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import choreReducer from "../features/chores/choreSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chores: choreReducer,
  },
});
