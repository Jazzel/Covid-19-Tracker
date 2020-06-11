import React, { useState, useEffect } from "react";
import "./CountryPicker.css";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "./../api/covid";

export const CountryPicker = ({handleCountryChange}) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPIData = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPIData();
  }, [setFetchedCountries]);

  return (
    <FormControl className="form-control">
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => (
          <option value={country} key={i}>{country}</option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};
