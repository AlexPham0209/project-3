import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import './App.css'

export default function CourseRow({id=0, description='', semester='', prefix='', number='', grade=''}) {
    return (
        <tr>
            <td className="column">{id}</td>
            <td className="column">{description}</td>
            <td className="column">{semester}</td>
            <td className="column">{prefix}</td>
            <td className="column">{number}</td>
            <td className="column">{grade}</td>
            <td className="column">
                <button className='edit-button'>Edit</button>
            </td>
        </tr>
    );
}