import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const githubLoader = async()=>{
    const response= await fetch('https://api.github.com/users/alirazaatish')
    return response.json();
}

const Github =()=>{

    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/issaafalkattan')
    //     .then(response=> response.json())
    //     .then(data=>{
    //         setData(data)
    //     })
    // },[])

    return(
 <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-96 bg-white shadow-md rounded-lg p-8">
        <h1 className="mx-auto text-center text-2xl font-bold text-red-500 mb-10">GITHUB API</h1>
        <div className="mx-auto text-2xl mb-10 w-32 h-32 border-4 border-grey-500 rounded-full flex items-center justify-center">
            <img src={data.avatar_url} alt="Github Picture" className="rounded-full" />
        </div>
        <h1 className="text-2xl font-bold text-red-500 mb-4">
            Github Follower: <span className="text-black">{data.followers}</span>
        </h1>
        <h1 className="text-2xl font-bold text-red-500 mb-4">
            Username: <span className="text-black">{data.name}</span></h1>
        <p className="text-gray-700 text-lg">This is your Github profile information.</p>
        <p className="text-gray-700 text-lg">{data.bio || 'No bio available'}</p>
      </div>
    </div>
    )
}

export default Github