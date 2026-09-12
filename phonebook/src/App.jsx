import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage]= useState(null)

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
  const existingPerson = persons.find(p => p.name === newName)

  if (existingPerson) {
    if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
      const changedPerson = { ...existingPerson, number: newNumber }

      personService
        .update(existingPerson.id, changedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(p => p.id !== existingPerson.id ? p : returnedPerson))
          setNewName('')
          setNewNumber('')
          setMessage(
          `Edited ${returnedPerson.name}`
        )
        setTimeout(() => {
          setMessage(null)
        }, 5000)
        })
    }
  } else {
    const nameObject = { name: newName, number: newNumber }
    personService
      .create(nameObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        setMessage(
          `Added ${nameObject.name}`
        )
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
  }
}

  const handleDelete = (id, name) => {
    if(window.confirm(`Delete ${name} ?`)) {
      personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
    }
  }

  useEffect(() => {
    personService
    .getAll()
    .then(allPersons => {
      setPersons(allPersons)
    })
    }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter value={filter} onChange={handleFilterChange}/>
      <PersonForm newName={newName} newNumber={newNumber} onChangeName={handleNameChange} onChangeNumber={handleNumberChange} onSubmit={addPerson}/>
      <h2>Numbers</h2>
      <Persons persons={personsToShow} handleDelete={handleDelete}/>
    </div>
  )
}

export default App