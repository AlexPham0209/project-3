import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import './App.css'
import CourseRow from "./CourseRow";

export default function WritingTable({name, credits}) {
    let numberOfCourses = 0;

    if (credits < 40)
        numberOfCourses = 3;
    else if (credits < 70)
        numberOfCourses = 2;
    else
        numberOfCourses = 1;
    
    let rows = Array.from({ length: numberOfCourses }, (_, i) => 
        (i === 0 ? <CourseRow id={1} prefix={'ENG'} number={'368/371'} description={`Writing${1}` }></CourseRow>
            : <CourseRow id={i + 1} description={`Writing${i + 1}`}></CourseRow> 
        )
    );

    return (
    <div className="course-table">
        <div className="title">Writing Emphasis for {name}</div>
        <Table bordered responsive striped hover style={{width: "100%"}}>
            <thead className="table-light" style={{backgroundColor: "rgb(240, 223, 223)", color: "white"}}>
                <tr>
                    <th style={{width: "15vw", fontWeight: 600}}>ID</th> 
                    <th style={{width: "40vw", fontWeight: 600}}>Description</th> 
                    <th style={{width: "40vw", fontWeight: 600}}>Semester</th> 
                    <th style={{width: "25vw", fontWeight: 600}}>Prefix</th> 
                    <th style={{width: "35vw", fontWeight: 600}}>Number</th> 
                    <th style={{width: "25vw", fontWeight: 600}}>Grade</th> 
                    <th style={{width: "25vw", fontWeight: 600}}>Editing</th>
                </tr>
            </thead>   

            <tbody>
                {rows}
            </tbody>
        </Table>
    </div>
    );

}