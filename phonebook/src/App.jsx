import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
    )

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    else {
      const nameObject = { name: newName, number: newNumber, id: Date.now()}
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
  }

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={handleFilterChange}/>
      <PersonForm newName={newName} newNumber={newNumber} onChangeName={handleNameChange} onChangeNumber={handleNumberChange} onSubmit={addPerson}/>
      <h2>Numbers</h2>
      <Persons persons={personsToShow}/>
    </div>
  )
}

export default App