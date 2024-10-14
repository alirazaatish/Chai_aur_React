import React from "react";

const Footer = ()=>{

    return(
        <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; 2024 MyWebsite. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    )
}

export default Footer