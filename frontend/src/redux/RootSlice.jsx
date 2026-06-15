import { createSlice } from "@reduxjs/toolkit";

const RootSlice = createSlice({
  name: "root",
  initialState: {
    loading: false,
    portfolioData: null,
  },
  reducers: {
    Showloading: (state) => {
      state.loading = true;
    },
    Hideloading: (state) => {
      state.loading = false;
    },
    SetPortfolioData: (state, action) => {
      state.portfolioData = action.payload;
    },
  },
});

export const {
  Showloading,
  Hideloading,
  SetPortfolioData,
} = RootSlice.actions;

export default RootSlice.reducer;