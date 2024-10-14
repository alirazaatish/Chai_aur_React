import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
    const {userid} = useParams()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8">
        <div className="mx-auto text-2xl mb-10 w-32 h-32 border-4 border-grey-500 rounded-full flex items-center justify-center">Profile</div>
        <h1 className="text-3xl font-bold text-red-500 mb-4">
            User ID: <span className="text-black">{userid}</span>
        </h1>
        <p className="text-gray-700 text-lg">This is your user profile information.</p>
        {/* You can add more fields, like user details, here */}
      </div>
    </div>
  );
};

export default User;
