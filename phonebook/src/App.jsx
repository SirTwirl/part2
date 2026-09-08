import { useState } from 'react'

const Person = ({text}) => (
  <p>{text}</p>
)

const Persons = ({persons}) => (
  <div>
    {persons.map(person =>
    <Person key={person.name} text={person.name}/>
  )}
  </div>
)
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas'}, 
    { name: 'Ada Lovelace'}
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName
    }
    console.log(nameObject)
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
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