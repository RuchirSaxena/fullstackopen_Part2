import React, { useState } from 'react';
import axios from 'axios';

import CountryView from './CountryView';

const App = () => {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState({});

    const getCountries = (searchCriteria) => {
        axios
            .get(`https://restcountries.eu/rest/v2/name/${searchCriteria}`)
            .then(response => {
                setCountries(response.data);
            }).catch(err => {
                console.log(err);
            });
    }

    const handleNameChange = (event) => {
        const name = event.target.value.trim();
        getCountries(name);

    }

    const handleShowChange = (country) => {
        setCountries([]);
        setCountry(country);
    }

    const showCountries = () => {
        let country = countries;
        if (country.length > 10) {
            return <CountryView country={null} viewType={1} />
        } else if (country.length === 1) {
            return <CountryView country={country[0]} viewType={0} />
        } else if (country.length > 0 && country.length <= 10) {
            return country.map(country => {
                return <div key={country.name}>{country.name} <input type='button' value='show' onClick={() => handleShowChange(country)} /></div>
            });
        }
    }

    let countryData = null;
    if (Object.keys(country).length > 0 && countries.length === 0) {
        countryData = <CountryView country={country} viewType={0} />
    } else {
        countryData = showCountries();
    }

    return (
        <>
            <div>
                <span> find countries </span>
                <input type='text' onChange={handleNameChange} />
            </div>
            <div>
                {countryData}
            </div>

        </>
    )

};

export default App;