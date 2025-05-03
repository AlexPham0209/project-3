import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import './App.css'


export default function Course({course, setSelected}) {
    const onClick = (group, id) => {
        setSelected({
            group: group,
            id: id,
            value: course
        });
    };

    return (
        <tr>
            <td className="column">{course.id}</td>
            <td className="column">{course.description}</td>
            <td className="column">{course.semester}</td>
            <td className="column">{course.prefix}</td>
            <td className="column">{course.number}</td>
            <td className="column">{course.grade}</td>
            <td className="column">
                <button className='edit-button' onClick={() => {onClick(course.group.toLowerCase(), course.id)}}>Edit</button>
            </td>
        </tr>
    );
}