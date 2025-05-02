import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CourseTable from './CourseTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <CourseTable>
      </CourseTable>
    </div>
  )
}

export default App
