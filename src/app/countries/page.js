"use client";
import { useSelector } from "react-redux";

const Countries = () => {
  const countries = useSelector((state) => state.countries.countries);

  console.log("Countries: ", countries);

  return <div>Countries</div>;
};

export default Countries;
