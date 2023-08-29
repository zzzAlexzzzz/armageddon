import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type cartItem = {
  id: number;
  name: string;
  distance: string;
  diameter: number;
  dangerous: boolean;
  dateFull: string;
};

interface CartSliceState {
  items: cartItem[];
}

const initialState: CartSliceState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addAsteroid(state, action: PayloadAction<cartItem>) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItem(state) {
      state.items = [];
    },
  },
});

export const { addAsteroid, removeItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;
