import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CourseTable from './CourseTable'
import Prompt from './Prompt'
import Edit from './Edit'


function createCourse(group='', id=0, description='', semester='', prefix='', number='', grade='') {
  return {
    group: group,
    id: id,
    description: description,
    semester: semester,
    prefix: prefix,
    number: number,
    grade: grade
  };
}

function createCourses(numOfCourses) {
    let writingCourses = Array.from({ length: numOfCourses }, (_, i) => 
      createCourse('writing', i + 1, `Writing${i + 1}`)
    );

    let speakingCourses = Array.from({ length: numOfCourses }, (_, i) => 
      createCourse('speaking', i + 1, `Speaking${i + 1}`)
    );

    return writingCourses.concat(speakingCourses);
}

function App() {
  const [name, setName] = useState('');
  const [credits, setCredits] = useState(null);

  const [courses, setCourses] = useState([]);
  const [selected, setSelected] = useState({
    group: '',
    id: null,
    value: null,
  });

  // Once the credit has changed, we create the list of course objects
  // The number of courses depends on the amount of credits one have
  useEffect(() => {
    if (credits === null)
      return;
    
    let numOfCourses = 0;

    if (credits < 40)
      numOfCourses = 3;
    else if (credits < 70)
      numOfCourses = 2;
    else
      numOfCourses = 1;

    let courses = createCourses(numOfCourses);
    setCourses(courses);
  }, [credits]); 

  // Function to edit an existing course
  // The course that is edited is the course with the same group and id as the parameters 
  const editCourse = (group='', id=null, value=null) => {
    // Resets the selected state
    setSelected({
      group: '',
      id: null,
      value: null
    });

    // If any of the parameters are its defaults, we return
    if (group === '' || id === null || value === null)
      return;

    setCourses(courses.map((course) => course.group === group.toLowerCase() && course.id === id ? value : course));
  };

  // Course Table section has two states: Editing the currently selected course and showing all courses in a tabular format
  // The mode switches depending on if the selected id is set (if the selected id is not equal to null)
  const Table = () => {
    if (selected.id !== null) 
      return <Edit selected={selected} editCourse={editCourse}></Edit>;
    
    return (
      <>
        <CourseTable group='Writing' name={name} courses={courses} setSelected={setSelected}></CourseTable>
        <CourseTable group='Speaking' name={name} courses={courses} setSelected={setSelected}></CourseTable>
      </>
    );
  };
  
  // Displays the course table only if credits are set
  return (
    <div>
      <Prompt setName={setName} credits={credits} setCredits={setCredits}></Prompt>
      {/* {credits !== null && Table()} */}
      {Table()}
    </div>
  );
}

export default App
