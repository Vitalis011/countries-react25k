"use client";
import { useAuth } from "@/app/context/AuthContext";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavourite,
  fetchFavourites,
  removeFavourite,
} from "../lib/features/favourites/favouritesSlice";

const FavouriteButton = ({ country, variant = "button" }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const isFavourite = useSelector((state) =>
    state.favourites.favourites.some(
      (favourite) => favourite.country_name === country?.name?.common
    )
  );
  const loading = useSelector((state) => state.favourites.loading);

  useEffect(() => {
    if (user) {
      dispatch(fetchFavourites());
    }
  }, [user, dispatch]);

  const toggleFavourite = () => {
    if (isFavourite) {
      dispatch(removeFavourite(country.name.common));
    } else {
      dispatch(addFavourite(country));
    }
  };

  // if no user, return nothing
  if (!user) {
    return null;
  }

  return (
    <Tooltip
      title={isFavourite ? "Remove from favourites" : "Add to favourites"}
    >
      <IconButton
        onClick={toggleFavourite}
        disabled={loading}
        color={isFavourite ? "error" : "primary"}
      >
        {isFavourite ? <Favorite /> : <FavoriteBorder />}
      </IconButton>
    </Tooltip>
  );
};

export default FavouriteButton;
