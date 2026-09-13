const Countries = ({countries}) => {
    if(countries.length > 10) {
        return <p>Too many matches, specify another filter</p>
    }
    if(countries.length === 1) {
        const country = countries[0]
        return (
            <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital?.[0]}</p>
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
            </div>
        )
    }
    return (
        <div>
        {countries.map(country => 
            <p key={country.cca3}>{country.name.common}</p>
        )}
        </div>
    )
}

export default Countries