import { useState } from 'react'

const Person = ({name, number}) => (
  <p>{name} {number}</p>
)

const Persons = ({persons}) => (
  <div>
    {persons.map(person =>
    <Person key={person.name} name={person.name} number={person.number}/>
  )}
  </div>
)
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '000-000-000' }, 
    { name: 'Ada Lovelace', number: '000-000-000'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    else {
      const nameObject = { name: newName, number: newNumber}
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  )
}

export default App