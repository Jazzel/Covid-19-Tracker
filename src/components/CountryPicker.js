import React, { useState, useEffect } from "react";
import "./CountryPicker.css";
import {
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Grid,
} from "@material-ui/core";
import { fetchCountries } from "./../api/covid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchAPIData = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPIData();
  }, [setFetchedCountries]);

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
          <InputLabel id="country-select">Age</InputLabel>
          <Select
            label="Country"
            id="country-select"
            className="width-full"
            onChange={(e) => handleCountryChange(e.target.value)}
          >
            <MenuItem value="">Global</MenuItem>
            {fetchedCountries.map((country, i) => (
              <MenuItem value={country} key={i}>
                {country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
