import Weather from './Weather'

const Countries = ({ countries, setSearchedCountries }) => {
  const showCountryData = (country) => {
    const capital = country.capital?.[0]

    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>capital {capital}</p>
        <p>area {country.area}</p>

        <h3>languages:</h3>
        <ul>
          {Object.values(country.languages || {}).map(lang => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>

        <img
          src={country.flags.png}
          alt={`Flag of ${country.name.common}`}
          width="150"
        />

        {capital && <Weather capital={capital} />}
      </div>
    )
  }

  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  }
  if (countries.length === 1) {
    const country = countries[0]
    return showCountryData(country)
  }

  return (
    <div>
      {countries.map(country => (
        <p key={country.cca3}>
          {country.name.common}{' '}
          <button onClick={() => setSearchedCountries(country.name.common)}>
            Show
          </button>
        </p>
      ))}
    </div>
  )
}

export default Countries