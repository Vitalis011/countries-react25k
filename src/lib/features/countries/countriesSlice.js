import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
});

export default countriesSlice.reducer;
