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

const Courses = ({courses}) => (
  <div>
  {courses.map(course =>
    <Course key={course.id} course={course} />
  )}
  </div>

)


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <h1>Web Development curriculum</h1>
      <Courses courses={courses} />
    </>
)
}

export default App