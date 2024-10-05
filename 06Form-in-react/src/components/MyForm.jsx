import React, { useState } from "react";

const MyForm = ()=>{

    const [formData, setFormData] = useState(
        {
            name: '',
            email: '',
            password: ''
        }
    )

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("Form is Submitted!");
        console.log(formData.name,formData.email, formData.password);
    }

    const valueHandler = (e)=>{
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    return(
       <>
        <div>
            <h1>Signup Form</h1>
            <form onSubmit={submitHandler}>

                <label>Name:</label>
                <input 
                 type="text"
                 name="name"
                 value={formData.name}
                 onChange={valueHandler}/>
                 <br /><br />
                 <label>Email:</label>
                 <input 
                 type="email"
                 name="email"
                 value={formData.email}
                 onChange={valueHandler}/>
                 <br /><br />                 
                 <label>Passwprd:</label>
                 <input 
                 type="password"
                 name="password"
                 value={formData.password}
                 onChange={valueHandler}/>
                 <br /><br />
                 <button type="submit">Submit</button>
            </form>
        </div>
       </>
    )
}

export default MyForm