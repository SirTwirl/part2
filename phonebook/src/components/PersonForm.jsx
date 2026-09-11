const PersonForm = ({newName, newNumber, onChangeName, onChangeNumber, onSubmit}) => {
    return (
        <>
        <h2>add a new</h2>
        <form onSubmit={onSubmit}>
            <div>
                name: <input value={newName} onChange={onChangeName}/>
            </div>
            <div>
                number: <input value={newNumber} onChange={onChangeNumber}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
        </>
    )
}

export default PersonForm