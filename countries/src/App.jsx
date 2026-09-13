import {useState, useEffect} from 'react'
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchedCountries, setSearchedCountries] = useState('')

  const handleInputCountriesChange = (event) => setSearchedCountries(event.target.value)
  
  const countriesToShow = searchedCountries === '' 
    ? []
    : countries.filter(country =>
      country.name.common.toLowerCase().includes(searchedCountries.toLowerCase())
      )
  

  useEffect(() => {
    axios
    .get('https://studies.cs.helsinki.fi/restcountries/api/all/')
    .then(
      fetchedcountries => setCountries(fetchedcountries.data)
    )
  }, [])

  return (
    <div>
      find countries <input value={searchedCountries} onChange={handleInputCountriesChange}/>
      <Countries countries={countriesToShow} setSearchedCountries={setSearchedCountries}/>
    </div>
  )
}

export default App