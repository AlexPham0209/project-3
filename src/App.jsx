import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WritingTable from './WritingTable'
import Prompt from './Prompt'


function Edit() {
  return (
    <>
    </>
  );
}

function Table(name, courses, setSelected) {
  return (
    <>
      <WritingTable name={name} courses={courses} setSelected={setSelected}></WritingTable>
    </>
  );
}

function createCourse(id=0, description='', semester='', prefix='', number='', grade='') {
  return {
    id: id,
    description: description,
    semester: semester,
    prefix: prefix,
    number: number,
    grade: grade
  };
}

function createWritingCourses(credits) {
  let numberOfCourses = 0;

    if (credits < 40)
      numberOfCourses = 3;
    else if (credits < 70)
      numberOfCourses = 2;
    else
      numberOfCourses = 1;
  
    let courses = Array.from({ length: numberOfCourses }, (_, i) => 
      createCourse(i + 1, `Writing${i + 1}`)
    );

    return courses;
}

function App() {
  const [name, setName] = useState('');
  const [credits, setCredits] = useState(0);

  const [writingCourses, setWritingCourses] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setWritingCourses(createWritingCourses(credits));
    setSelected(null);
  }, [credits]); 

  return (
    <div>
      <Prompt setName={setName} setCredits={setCredits}></Prompt>
      {selected !== null ? Edit() : Table(name, writingCourses, setSelected)}
    </div>
  );
}

export default App
