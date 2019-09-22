import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const CountryWeather = ({ country }) => {
    const [weather, setWeather] = useState({});

    const getWeather = useCallback(() => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=37785fba807cfbe2c5538ee17e9e5565&query=${country}`)
            .then(response => {
                setWeather(response.data);
            }).catch(err => {
                setWeather({});
                console.log(err)
            });
    }, [country]);

    useEffect(() => {
        getWeather();
    }, [getWeather]);

    const weatherData = () => {
        if (!Object.keys(weather).length || weather.error.code === 104) return <div>No Records Found OR API usage limit is over. </div>
        const { current: currentWeather } = weather;
        return (
            <>
                <div>
                    <b>temperature</b> <span>{currentWeather.temperature}</span>
                </div>
                <img src={currentWeather.weather_icons[0]} alt='weather icon' />
                <div>
                    <b>wind</b> <span>{currentWeather.wind_dir}</span>
                </div>
            </>
        )

    }
    return (
        <div>
            <h2> Weather in {country}</h2>
            {weatherData()}
        </div>
    )
}

export default CountryWeather;