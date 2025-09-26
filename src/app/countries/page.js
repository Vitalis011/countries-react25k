"use client";
import { useDispatch, useSelector } from "react-redux";

import { fetchCountries } from "@/lib/features/countries/countriesSlice";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Countries = () => {
  const countries = useSelector((state) => state.countries.countries);
  const dispatch = useDispatch();
  const router = useRouter();

  console.log("encodeURLComponent: ", encodeURIComponent("United States"));

  const handleCountryClick = (countryName) => {
    const slug = countryName.toLowerCase().replace(/\s+/g, "-");
    router.push(`/countries/${encodeURIComponent(slug)}`);
  };

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  console.log("Countries: ", countries);

  if (countries.length === 0) {
    return <div>Loading...</div>;
  }

  const getCurrencies = (country) => {
    if (!country.currencies) return "N/A";
    return Object.values(country.currencies)
      .map((currency) => `${currency.name} (${currency.symbol})`)
      .join(", ");
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {countries.map((country) => (
          <Card
            key={country.name.common}
            sx={{ width: "200px", height: "200px" }}
          >
            <CardActionArea
              onClick={() => handleCountryClick(country.name.common)}
            >
              <CardContent>
                <Image
                  width={100}
                  height={100}
                  style={{ objectFit: "cover" }}
                  src={country.flags.svg}
                  alt={country.name.common}
                />
                <Typography variant="h6">{country.name.common}</Typography>
                <Typography variant="body1">{country.population}</Typography>
                <Typography variant="body1">
                  {country && getCurrencies(country)}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Grid>
    </>
  );
};

export default Countries;
