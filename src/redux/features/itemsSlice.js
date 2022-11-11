import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    isLoading: false,
  },
  reducers: {
    getItemsFetch: (state) => {
      state.isLoading = true;
    },
    getItemsSuccess: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    getItemsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getItemsFetch, getItemsSuccess, getItemsFailure } =
  itemsSlice.actions;

export default itemsSlice.reducer;
