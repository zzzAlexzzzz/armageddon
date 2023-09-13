import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type asteroidItem = {
  id: number;
  name: string;
  distance: string;
  diameter: number;
  dangerous: boolean;
  dateFull: string;
};

interface CartSliceState {
  items: asteroidItem[];
}

export const fetchAsteroid = createAsyncThunk(
  "asteroid/fetchAsteroid",
  async () => {
    const res = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-09-13&end_date=2023-09-13&api_key=VrfULl1k8H3g4oPHMPAcJ8mKBCa25c4xAbMqqICI`
    );

    return res.data.near_earth_objects["2023-09-13"];
  }
);

const initialState: CartSliceState = {
  items: [],
};

export const asteroidSlice = createSlice({
  name: "asteroid",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  // extraReducers: {
  //   [fetchAsteroid.fulfilled]: () => console.log("fulfilled"),
  //   [fetchAsteroid.pending]: () => console.log("pending"),
  //   [fetchAsteroid.rejected]: () => console.log("rejected"),
  // },

  // extraReducers: {
  //   [fetchAsteroid.fulfilled]: (state, action: PayloadAction<asteroidItem>) => {
  //     console.log(state);
  //   },
  // },

  extraReducers: (builder) => {
    builder.addCase(fetchAsteroid.fulfilled, (state, action) => {
      state.items.push(action.payload);
    });
  },
});

export const { setItems } = asteroidSlice.actions;

export default asteroidSlice.reducer;
