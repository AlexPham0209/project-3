import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WritingTable from './WritingTable'
import Prompt from './Prompt'
import SpeakingTable from './SpeakingTable'

function Edit() {
  return (
    <>
    </>
  );
}

function Table(name, credits) {
  return (
    <>
      <WritingTable name={name} credits={credits}></WritingTable>
      <SpeakingTable name={name} credits={credits}></SpeakingTable>
    </>
  );
}

function App() {
  const [name, setName] = useState('');
  const [credits, setCredits] = useState(0);
  const [editing, setEditing] = useState(false);
  
  return (
    <div>
      <Prompt></Prompt>
      {editing ? Edit() : Table()}
    </div>
  );
}

export default App
