import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Cards } from "./components/Cards";
import { Chart } from "./components/Chart";
import { Box } from "@material-ui/core";
import image from "./images/covid-19.png";
import { CountryPicker } from "./components/CountryPicker";
import { fetchData } from "./api/covid";

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");
  useEffect(() => {
    const fetchAPIData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
      
    };
    fetchAPIData();
  }, []);

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    setCountry(country);
    setData(fetchedData);
  };
  

  return (
    <>
      <Header />
      <Box color="text.primary">
        <img src={image} width="100%" alt="header" />
      </Box>
      <Box styles={{ backgroundColor: "black", padding: 50 }}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={handleCountryChange} />
        <Chart data={data} country={country}  />
      </Box>
      <Footer />
    </>
  );
}

export default App;
