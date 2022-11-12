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
      const existingIndex = state.brands.findIndex(
        (item) => item.account === action.payload.account
      );
      if (existingIndex >= 0) {
        const newBrandItems = state.brands.filter(
          (brand) => brand.account !== action.payload.account
        );
        state.brands = newBrandItems;
      } else {
        state.brands = [...state.brands, action.payload];
      }

    },
    tagsFilter: (state, action) => {
      const existingIndex = state.tags.findIndex(
        (item) => item.i === action.payload.i
      );
      if (existingIndex >= 0) {
        const newTags = state.tags.filter(
          (brand) => brand.i !== action.payload.i
        );
        state.tags = newTags;
      } else {
        state.tags = [...state.tags, action.payload];
      }
    },
  },
});

export const { sortBy, brandsFilter, tagsFilter } = filterSlice.actions;

export default filterSlice.reducer;
