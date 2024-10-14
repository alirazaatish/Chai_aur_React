import React from "react";
import { Form } from "react-router-dom";


export const handleCreatUser = async ({ request })=>{

  const formData = await request.formData();

  // const name = formData.get('name');
  // const email = formData.get('email');
  // const message = formData.get('message');

  const submission = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message') 
  }

  console.log("Name: ", submission.name);
  console.log("Email: ", submission.email);
  console.log("Message: ", submission.message);

  return submission;
}

const Contact = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-500 hover:shadow-xl">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Contact Us</h1>
        <p className="text-gray-700 text-lg text-center mb-8">
          We're here to answer your questions. Feel free to get in touch with us using the form below or by contacting us through other means.
        </p>
        <Form method="post" className="space-y-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-600">Message</label>
            <textarea
              name="message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              placeholder="Your Message"
            />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 w-full md:w-auto">
            Send Message
          </button>
        </Form>
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Contact Information</h2>
          <p className="text-gray-700 mb-1">Email: contact@mywebsite.com</p>
          <p className="text-gray-700">Phone: +1 234 567 890</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
