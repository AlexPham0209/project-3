import { Container, Form, FormGroup, Row, Button } from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.css";

export default function Prompt({setName, setCredits}) {
    const onSubmit = (e) => {
        e.preventDefault();
        const {name, credits} = e.target;

        setName(name.value);
        setCredits(Number(credits.value));
    }

    return (
        <Form className='course-form' onSubmit={onSubmit}>
            <Form.Group className='text-bar' controlId='name'>
                <Form.Label className='text-description'>Student Name</Form.Label>
                <Form.Control className='text-input' type="name" placeholder='Enter Name'></Form.Control>
            </Form.Group>
            
            <Form.Group className='text-bar' controlId='credits'>
                <Form.Label className='text-description'>Total Transfer Credits</Form.Label>
                <Form.Control className='text-input' type="name" placeholder='Enter Credits'></Form.Control>
            </Form.Group>

            <Button type='submit' style={{display: 'none'}}>Submit</Button>
        </Form>
    );
}