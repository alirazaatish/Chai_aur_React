import React from "react";

const Service = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-500 hover:shadow-xl">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Our Services</h1>
        <p className="text-gray-700 text-lg text-center mb-8">
          We offer a wide range of services to help you achieve your business goals. Whether you need a modern website, powerful app, or digital marketing strategy, we have the right solution for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Web Development",
              description: "Build modern, scalable, and secure web applications with our expert developers.",
              icon: "https://via.placeholder.com/64",
            },
            {
              title: "UI/UX Design",
              description: "Create stunning, user-friendly interfaces that engage and retain your customers.",
              icon: "https://via.placeholder.com/64",
            },
            {
              title: "Digital Marketing",
              description: "Grow your online presence with effective SEO and marketing campaigns.",
              icon: "https://via.placeholder.com/64",
            },
            {
              title: "E-Commerce Solutions",
              description: "Complete e-commerce setup to sell products easily and securely.",
              icon: "https://via.placeholder.com/64",
            },
            {
              title: "SEO Optimization",
              description: "Improve your search engine ranking and drive organic traffic to your site.",
              icon: "https://via.placeholder.com/64",
            },
            {
              title: "Mobile App Development",
              description: "Develop mobile applications tailored to your needs.",
              icon: "https://via.placeholder.com/64",
            },
          ].map((service, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <img src={service.icon} alt={service.title} className="mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-blue-500 mb-2">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
