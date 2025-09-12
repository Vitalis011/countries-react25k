import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./features/countries/countriesSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      countries: countriesReducer,
    },
  });
};
