import React from "react";
import "./App.css";
import CustomButton from "./components/Button";
import axios from "axios";
import CountriesData from "./interfaces/CountriesData";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>Corona Dashboard</h4>
        <CustomButton
          onClick={() => console.log("hello")}
          color="primary"
          text="Call API"
        />
      </header>
    </div>
  );
}

async function getCountryInformation(): Promise<CountriesData> {
  //get all of the corona data for all of the countries
  const [err, response] = await axios.get(
    `https://corona.lmao.ninja/countries`
  );
  handleError(`API is down, try again later.`, err, false);
  let allCountries = response.data;
  return allCountries;
}

export default App;
