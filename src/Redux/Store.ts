import { configureStore } from "@reduxjs/toolkit";
import cart from "./Slice/CartSlice";
import asteroid from "./Slice/AsteroidSlice";

export const store = configureStore({
  reducer: {
    cart,
    asteroid,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
