import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import InputWithSugestions from '../form/InputWithSugestions/InputWithSugestions'

export default function SearchCity() {
  const[searchText, setSearchText] = useState('')
  const[suggestions, setSuggestions] = useState([])
  const router = useRouter()

  const fetchCitiesList = async () => {
    const CITIES_LIMIT = 5
    const response = await fetch(`/api/openweathermap?url=geo/1.0/direct?q=${searchText}&limit=${CITIES_LIMIT}`)
    const json = await response.json()
    handleList(json)
  }

  const handleList = (list) => {
    const formattedList = list.map((obj) => ({
      text: `${obj.name}, ${obj.state}, ${obj.country}`, 
      onClick: () => router.push(`/info/${obj.lat}/${obj.lon}`)
    }))
    setSuggestions(formattedList)
  }

  useEffect (() => {
    if (searchText.length >= 3) fetchCitiesList()
    else setSuggestions([])
  }, [searchText])

  return (
    <InputWithSugestions 
    placeholder = "Digite o nome da cidade" 
    value={searchText}
    onChange={(event) => setSearchText(event.target.value)}
    suggestions={suggestions}
    />
  )
}
