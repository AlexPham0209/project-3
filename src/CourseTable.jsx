import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import './App.css'
import CourseRow from "./CourseRow";

export default function CourseTable({credits}) {

    return (
    <div className="course-table">
        <div className="title">Writing Emphasis of John Wayne</div>
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
                <CourseRow></CourseRow>
            </tbody>
        </Table>
    </div>
    );

}