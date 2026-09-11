const Person = ({name, number, handleDelete}) => (
    <>
        <p>{name} {number}</p>
        <button onClick={handleDelete}>Delete</button>
    </>
        )

export default Person