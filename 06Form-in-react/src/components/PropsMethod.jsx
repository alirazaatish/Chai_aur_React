import React, { Component, useState} from "react";

// Props Method in Function Components
const Parent = (props)=>{
    console.log("Props===>", props);
    const { name, rollNo } = props
    const [semester, setSemester] = useState("1st")

    const semesterHandler = ()=>{
        setSemester("2nd")
    };

    return(
        <>
        <h1>NAME:{name} | Roll No:{rollNo}</h1>
        <h1>Semester: {semester} </h1>
        <Child dept="CyberSecurity" onSemester={semesterHandler}/>
        <Student name="Aimen" rollNo="4567" semester={semester} onSemester={semesterHandler}/>
        </>
    )
}

const Child = ({dept, onSemester})=>{
    return(
        <>
        <h2>Dep: {dept}</h2>
        <button onClick={onSemester}>Update Semester</button>
        </>
    )
}
export default Parent

class Student extends React.Component{
    render(){
        const { name, rollNo, semester, onSemester } = this.props

        return(
            <div>
                <h1>Her Name: {name} | RollNo: {rollNo}</h1>
                <h2>Semester: {semester}</h2>
                <button onClick={onSemester}>Update Semester</button>
            </div>
        );
    }
}
