import React from "react";
import './Form.css'

const Form = ()=>{
    return(
        <>
        <div className="title">
            <h1>Form Validation in React Js</h1>
        </div>
        <div className="userDetails">
            <h2>User Details</h2>
            <form action="#" className="userFormDetails">
                <div className="inputFeild">
                    <label>Name</label>
                    <input type="text" id="userName" placeholder="Enter your name" />
                </div>
                <div className="inputFeild">
                    <label>Email</label>
                    <input type="email" id="userEmail" placeholder="Enter your Email" />
                </div>
                <div className="inputFeild">
                    <label>Mobile No</label>
                    <input type="number" id="mobileNo" placeholder="Enter your phone no" />
                </div>
                <div className="inputFeild">
                    <input type="submit" value={"Save"} />
                </div>
            </form>
        </div>
        </>
    )
}

export default Form