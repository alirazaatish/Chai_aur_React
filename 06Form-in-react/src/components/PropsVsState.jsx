import React, { Component } from 'react';

class Message extends Component {
    constructor(props){
        super(props);
        this.state={
            message: "Wellcome To AR Atish Development Site!"
        }
    }

    changeMessage = ()=>{
        this.setState({
            message: "Thank You For Follow Us!"
        })    
    }

    
   render(){
    return(
        <>
        <h1>{this.state.message}</h1>
        <button onClick={()=> this.changeMessage()}>Follow Us</button>
        </>
    )
   }
}

export default Message;