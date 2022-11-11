import { createSlice } from "@reduxjs/toolkit";

export const companiesSlice = createSlice({
  name: "companies",
  initialState: {
    items: [],
    isLoading: false,
  },
  reducers: {
    getCompaniesFetch: (state) => {
      state.isLoading = true;
    },
    getCompaniesSuccess: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    getCompaniesFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getCompaniesFetch, getCompaniesSuccess, getCompaniesFailure } =
  companiesSlice.actions;

export default companiesSlice.reducer;
