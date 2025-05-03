import { useState } from 'react';
import { Container, Form, FormGroup, Row, Button } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
// import "bootstrap/dist/css/bootstrap.css";

export default function Prompt({setName, credits, setCredits}) {
    const [properties, setProperties] = useState({
        name: '',
        credits: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        const {name, credits} = e.target;
        
        setName(name.value);
        setCredits(Number(credits.value));
    }

    const onNameChange = (e) => {
        e.preventDefault();
        setProperties({
            name: e.target.value,
            credits: properties.credits
        });
    }; 

    const onCreditsChange = (e) => {
        e.preventDefault();
        setProperties({
            name: properties.name,
            credits: e.target.value
        });
    }; 

    return (
        <Form className='course-form' onSubmit={onSubmit}>
            <Form.Group className='text-bar' controlId='name'>
                <Form.Label className='text-description'>Student Name</Form.Label>
                <Form.Control className='text-input' type="name" placeholder='Enter Name' disabled={credits !== null} onChange={onNameChange}></Form.Control>
            </Form.Group>
            
            <Form.Group className='text-bar' controlId='credits'>
                <Form.Label className='text-description'>Total Transfer Credits</Form.Label>
                <Form.Control className='text-input' type="number" placeholder='Enter Credits' disabled={credits !== null} defaultValue={0} onChange={onCreditsChange}></Form.Control>
            </Form.Group>

            <Button type='submit' style={{display: 'none'}} disabled={properties.name === '' || properties.value === ''}>Submit</Button>
        </Form>
    );
}