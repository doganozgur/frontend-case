import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortValue: "newToOld",
  brands: [],
  tags: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    sortBy: (state, action) => {
      state.sortValue = action.payload;
    },
    brandsFilter: (state, action) => {
      const currentItem = state.brands.findIndex(
        (item, i) => item[i] === action.payload[i]
      );
      console.log(currentItem);
      state.brands = [...state.brands, action.payload];
    },
    tagsFilter: (state, action) => {
      state.tags = [...state.tags, action.payload];
    },
  },
});

export const { sortBy, brandsFilter, tagsFilter } = filterSlice.actions;

export default filterSlice.reducer;
