import React from "react";

const About = ()=>{

    return(
        <div className="container mx-auto p-8">
      <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-500 hover:shadow-xl">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">About Us</h1>
        <div className="flex flex-col md:flex-row items-center mb-6">
          <img src="https://via.placeholder.com/400" alt="Team" className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0 md:mr-6" />
          <p className="text-gray-700 text-lg">
            Welcome to MyWebsite! We are a team of passionate professionals committed to delivering excellence. With a diverse group of experts specializing in various fields, we bring the right mix of skills and knowledge to the table, ensuring the highest quality of service for all our clients. We believe in building meaningful relationships with our customers by understanding their needs and providing personalized solutions.
          </p>
        </div>
        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Our Core Values</h2>
        <ul className="list-disc pl-8 text-gray-700 mb-6">
          <li>Integrity - We operate with honesty and uphold our moral values.</li>
          <li>Innovation - We constantly push the boundaries of what's possible.</li>
          <li>Customer Focus - We put our customers at the center of everything we do.</li>
        </ul>
        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Our Mission</h2>
        <p className="text-gray-700 text-lg mb-6">
          Our mission is to innovate and lead in our industry, providing top-notch services while ensuring customer satisfaction. We are committed to making technology accessible and easy to use for everyone.
        </p>
        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {["Alice", "Bob", "Charlie"].map((name, index) => (
            <div key={index} className="bg-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <img src={`https://via.placeholder.com/150?text=${name}`} alt={name} className="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 className="text-xl text-center font-semibold text-blue-600">{name}</h3>
              <p className="text-center text-gray-600">Senior Developer</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}

export default About