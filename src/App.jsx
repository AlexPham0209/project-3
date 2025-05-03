import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CourseTable from './CourseTable'
import Prompt from './Prompt'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Prompt></Prompt>
      <CourseTable></CourseTable>
    </div>
  )
}

export default App
