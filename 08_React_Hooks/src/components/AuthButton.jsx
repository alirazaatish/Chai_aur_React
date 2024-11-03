import React from "react";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";

const AuthButton = ()=>{

    const {isLoggedIn, login, logout} = useContext(AuthContext);

    return(
        <nav>
            {
                isLoggedIn ? (<button onClick={logout}>Logout</button>) : (<button onClick={login}>Login</button>)

            }
        </nav>
    )
}

export default AuthButton;