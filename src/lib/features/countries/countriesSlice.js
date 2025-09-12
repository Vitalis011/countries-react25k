import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api =
  "https://restcountries.com/v3.1/all?fields=name,flags,population,currencies";

const initialState = {
  countries: [],
};

export const fetchCountries = createAsyncThunk(
  "countries/countries",
  async () => {
    const response = await axios.get(api);
    console.log("status: ", response.status);
    console.log("Response: ", response.data);
    return response.data;
  }
);

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.countries = action.payload;
    });
  },
});

export default countriesSlice.reducer;
