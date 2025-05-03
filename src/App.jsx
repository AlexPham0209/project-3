import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CourseTable from './CourseTable'
import Prompt from './Prompt'

function App() {
  const [name, setName] = useState('');
  const [credits, setCredits] = useState(0);

  return (
    <div>
      <Prompt setName={setName} setCredits={setCredits}></Prompt>
      <CourseTable name={name} credits={credits}></CourseTable>
    </div>
  )
}

export default App
