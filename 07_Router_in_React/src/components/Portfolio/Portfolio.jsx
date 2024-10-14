import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Dp from 'components\Portfolio\Untitled design.png'
import { faGithub, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Portfolio = () => {
    return (
        <div className="bg-black text-white h-screen flex flex-col">
            {/* Navigation Bar */}
            <nav className="flex justify-between items-center p-5 bg-gray-800 shadow-md">
                <div className="text-2xl font-bold">
                    AR <span className="text-green-500">ATISH</span>
                </div>
                <div className="hidden md:flex space-x-4">
                    <a href="#home" className="hover:text-green-500">Home</a>
                    <a href="#about" className="hover:text-green-500">About</a>
                    <a href="#skills" className="hover:text-green-500">Skills</a>
                    <a href="#services" className="hover:text-green-500">Services</a>
                    <a href="#contact" className="hover:text-green-500">Contact</a>
                </div>
                <div className="md:hidden">
                    <button className="text-white">☰</button>
                </div>
            </nav>

            {/* Main Section */}
            <section className="flex flex-col md:flex-row justify-center items-center flex-grow p-10">
                <div className="md:w-1/2 mb-10">
                    <img src="07_Router_in_React\src\components\Portfolio\Untitled design.png" alt="Profile" className="rounded-full shadow-lg w-64 h-64" />
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl font-bold mb-4">Hey, I'm <span className="text-green-500">ALI RAZA</span></h1>
                    <div className="text-2xl mb-4">I'm a <span className="text-green-500">Front-end Developer</span></div>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi commodi quia rerum.
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4 mb-4">
                        <a href="#" className="text-green-500 hover:scale-110 transition-transform">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a href="#" className="text-green-500 hover:scale-110 transition-transform">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a href="#" className="text-green-500 hover:scale-110 transition-transform">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a href="#" className="text-green-500 hover:scale-110 transition-transform">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                    </div>
                    <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">Hire Me</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-center py-4">
                <p>&copy; 2024 Ali Raza. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Portfolio;
