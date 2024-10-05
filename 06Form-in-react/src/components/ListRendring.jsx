import React from "react";

const ListRendering = ()=>{
    
    const students = [
        {
            id: 1,
            name: "Ali",
            section: "A01"
        },
        {
            id: 2,
            name: "Raza",
            section: "C01"
        },
        {
            id: 3,
            name: "Aimen",
            section: "R01"
        },
        {
            id: 4,
            name: "Atish",
            section: "T01"
        }
    ];
    const nameList = students.map((student)=> <Display key={student.id} student={student} />)
    console.log("NAMELIST==", nameList);
    return(
        <>
        <h1>Student Data</h1>
        <div>{nameList}</div>
        </>
    )
}

const style = {
    border: "2px solid black",
    padding: "20px",  // You can add more styles as needed
    borderRadius: "5px", // Optional: to round the corners
  };

const Display = ({student})=>{
    console.log("DATA", student);
    return(
        <div>
            <table style={style} >
                <ol>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Section</th>
                    </tr>
                    <tr>
                        <td>{student.name}</td>
                        <td>{student.id}</td>
                        <td>{student.section}</td>
                    </tr>
                </ol>
            </table>
        </div>
    )
}

export default ListRendering