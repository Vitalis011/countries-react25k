import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./features/countries/countriesSlice";
import favouritesReducer from "./features/favourites/favouritesSlice";
import profileReducer from "./features/profile/profileSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      countries: countriesReducer,
      favourites: favouritesReducer,
      profile: profileReducer,
    },
  });
};
