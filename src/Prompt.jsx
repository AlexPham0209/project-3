import { Container, Form, FormGroup, Row } from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.css";

export default function Prompt() {
    return (
        <Form className='course-form'>
            <Form.Group className='text-bar' controlId='grade'>
                <Form.Label className='text-description'>Student Name</Form.Label>
                <Form.Control className='text-input' type="name" placeholder='Enter Name'></Form.Control>
            </Form.Group>

            <Form.Group className='text-bar' controlId='grade'>
                <Form.Label className='text-description'>Total Transfer Credits</Form.Label>
                <Form.Control className='text-input' type="name" placeholder='Enter Credits'></Form.Control>
            </Form.Group>
        </Form>
    );
}