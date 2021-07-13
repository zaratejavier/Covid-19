import './App.css';
import { MenuItem, FormControl, Select } from '@material-ui/core';
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');

  // https://disease.sh/v3/covid-19/countries

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
        .then((respone) => respone.json())
        .then((data) => {
          // console.log('*************', data);
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = (e) => {
    const countryCode = e.target.value;
    console.log('Country code ', countryCode);

    setCountry(countryCode);
  };

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value={country} onChange={onCountryChange}>
            <MenuItem value="worldwide">WorldWide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {/* Header */}
      {/* Title + Select input dropdown field */}

      {/* info boxes */}
      {/* info boxes */}
      {/* info boxes */}

      {/* table */}
      {/* graph */}

      {/* Map */}
    </div>
  );
}

export default App;
