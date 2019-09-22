import React from 'react';
import CountryWeather from './Weather';

const CountryView = ({ country, viewType }) => {
  return (
    <div>
      {viewType === 1 ? <div>To Many Matches,specify anotther filter</div> :
        (
          <>
            <h2>{country.name}</h2>
            <div>capital {country.capital}</div>
            <div>population {country.population}</div>
            <h4>languages</h4>
            <ul>
              {
                country.languages.map(language => {
                  return <li key={language.name} >{language.name}</li>
                })
              }
            </ul>
            <img src={country.flag} width='100px' height='100px' alt='country flag' />
            <CountryWeather country={country.name} />
          </>
        )
      }
    </div>
  )

}

export default CountryView;