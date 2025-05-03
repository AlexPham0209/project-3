import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WritingTable from './WritingTable'
import Prompt from './Prompt'
import Edit from './Edit'

function EditMenu(selected, editCourse) {
  return (
    <>
      <Edit selected={selected} editCourse={editCourse}></Edit>
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
  const [credits, setCredits] = useState(null);

  const [courses, setCourses] = useState([]);
  const [selected, setSelected] = useState({
    id: null,
    value: null,
  });

  function editCourse(id=null, value=null) {
    setSelected({
      id: null,
      value: null
    });

    if (id === null || value === null)
      return;

    setCourses(courses.map((course) => course.id === id ? value : course));
  }

  useEffect(() => {
    setCourses(createWritingCourses(credits));
    
    setSelected({
      id: null,
      value: null
    });
  }, [credits]); 
  

  if (credits !== null) {
    return (
      <div>
        <Prompt setName={setName} credits={credits} setCredits={setCredits}></Prompt>
        {selected.id !== null ? EditMenu(selected, editCourse) : Table(name, courses, setSelected)}
      </div>
    );
  }
  
  return (
    <div>
      <Prompt setName={setName} credits={credits} setCredits={setCredits}></Prompt>
    </div>
  );

}

export default App
