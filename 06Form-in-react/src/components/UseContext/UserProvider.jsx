import React, { useState } from "react";
import { Children } from "react";
import { createContext } from "react";


const UserContext = createContext();

const UserProvider =()=>{

    const [users, setUsers] = useState(
        {
        name: "Ali",
        id: 179522
        },
        {
            name: "Raza",
            id: 16329
            },
)

    return(
        <UserContext.Provider>
            {Children}
        </UserContext.Provider>
    )
}

export default UserProvider;