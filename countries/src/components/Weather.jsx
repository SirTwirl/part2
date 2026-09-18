import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState(null)
  const apiKey = import.meta.env.VITE_WEATHER_KEY

  useEffect(() => {
    if (!capital) return

    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${apiKey}`)
      .then(response => {
        setWeather(response.data)
      })
      .catch(error => {
        console.error('Error fetching weather:', error)
      })
  }, [capital, apiKey])

  if (!weather) return null

  const iconCode = weather.weather[0].icon
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`

  return (
    <div>
      <h3>Weather in {capital}</h3>
      <p>temperature {weather.main.temp} Celsius</p>
      <img src={iconUrl} alt={weather.weather[0].description} />
      <p>wind {weather.wind.speed} m/s</p>
    </div>
  )
}

export default Weather