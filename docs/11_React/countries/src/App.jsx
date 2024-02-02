import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState('Germany')

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${query}`)//?fullText=true`)
      .then(res => res.json())
      .then((data) => {
        if (data.status == 404) {
          console.error(data)
        }
        else {
          setCountries(data)
        }
      })
      .catch(() => {})
  }, [query])

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
        />
      <ul>
      { countries.map((country, idx) => {
        return (<li key={idx}>{ country.name.common }</li>)
      }) }
      </ul>
    </>
  )
}

export default App
