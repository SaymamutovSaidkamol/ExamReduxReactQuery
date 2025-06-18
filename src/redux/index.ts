import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./features/PhoneSlice";
export const store = configureStore({
  reducer: {
    studentSlice: studentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
