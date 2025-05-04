import { Container, Form, FormGroup, Row, Button } from 'react-bootstrap';
import '../App.css'

export default function Edit({selected, editCourse}) {
    const course = selected.value;

    const onSubmit = (e) => {
        e.preventDefault();
        const {id, description, semester, prefix, number, grade} = e.target;

        const course =  {
            group: selected.group,
            id: id.value,
            description: description.value,
            semester: semester.value,
            prefix: prefix.value,
            number: number.value,
            grade: grade.value
        }

        editCourse(selected.group, selected.id, course);
    };

    const onCancel = (e) => {
        e.preventDefault();
        editCourse();
    };

    return (
        <Form className='edit-form' onSubmit={onSubmit}>
            <Form.Group className='text-bar' controlId='id'>
                <Form.Label className='text-description'>ID</Form.Label>
                <Form.Control className='text-input' type="text" placeholder='Enter ID' defaultValue={course.id} disabled></Form.Control>
            </Form.Group>

            <Form.Group className='text-bar' controlId='description'>
                <Form.Label className='text-description'>Description</Form.Label>
                <Form.Control className='text-input' type="text" placeholder='Enter Description' defaultValue={course.description}></Form.Control>
            </Form.Group>

            <Form.Group className='text-bar' controlId='semester'>
                <Form.Label className='text-description'>Semester</Form.Label>
                <Form.Control className='text-input' type="text" placeholder='Enter Semester' defaultValue={course.semester}></Form.Control>
            </Form.Group>

            <Form.Group className='text-bar' controlId='prefix'>
                <Form.Label className='text-description'>Prefix</Form.Label>
                <Form.Control className='text-input' type="text" placeholder='Enter Prefix' defaultValue={course.prefix}></Form.Control>
            </Form.Group>
            
            <Form.Group className='text-bar' controlId='number'>
                <Form.Label className='text-description'>Number</Form.Label>
                <Form.Control className='text-input' type="text" placeholder='Enter Number' defaultValue={course.number}></Form.Control>
            </Form.Group>

            <Form.Group className='text-bar' controlId='grade'>
                <Form.Label className='text-description'>Grade</Form.Label>
                <Form.Control className='text-input' type="text" placeholder='Enter Grade' defaultValue={course.grade}></Form.Control>
            </Form.Group>

            <div className='edit-buttons'>
                <Button type='submit' style={{marginBottom: '20px'}}>Save</Button>
                <Button type='cancel' variant="secondary" onClick={onCancel}>Cancel</Button>
            </div>
        </Form>
    );
}