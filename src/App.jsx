import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WritingTable from './WritingTable'
import Prompt from './Prompt'
import SpeakingTable from './SpeakingTable'

function App() {
  const [name, setName] = useState('');
  const [credits, setCredits] = useState(0);

  return (
    <div>
      <Prompt setName={setName} setCredits={setCredits}></Prompt>
      <WritingTable name={name} credits={credits}></WritingTable>
      <SpeakingTable name={name} credits={credits}></SpeakingTable>
    </div>
  )
}

export default App
