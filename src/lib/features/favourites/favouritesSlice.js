import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourites: [],
  loading: false,
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default favouritesSlice.reducer;
