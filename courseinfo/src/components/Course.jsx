const Header = ({name}) => (
  <h1>{name}</h1>
)

const Content = ({parts}) => {
  const sum = parts.reduce((total, part) => total + part.exercises, 0)
  return(
    <>
      {parts.map(part =>
        <Part key={part.id} part={part} />
      )}
      <h3>total of {sum} exercises</h3>
    </>
  )
}

const Part = ({part}) => (
  <p>{part.name} {part.exercises}</p>
)

const Course = ({course}) => (
  <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
  </div>
)

export default Course