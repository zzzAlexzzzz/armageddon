import { configureStore } from "@reduxjs/toolkit";
import cart from "./Slice/CartSlice";

export const store = configureStore({
  reducer: {
    cart,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;