"use client";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const FavouritesPage = () => {
  const { user, loading: authLoading } = useAuth();
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.favourites);
  const loading = useSelector((state) => state.favourites.loading);

  console.log("Favourites: ", favourites);

  // if we have user logged in show 'Favourites page is here'
  // if we dont have user logged in show 'Please login to see your favourites'
  if (!user) {
    return <div>Please login to see your favourites</div>;
  }

  return <div>Favourites page is here</div>;
};

export default FavouritesPage;
