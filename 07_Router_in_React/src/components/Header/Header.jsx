import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

const Header = ()=>{

    return(
        <>
         <header className="bg-gray-600 text-white shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link>MyWebsite</Link>
        </div>
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink 
            to=""
            className={({isActive})=>
            `${isActive? "text-orange-400" : "text-white"}`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
            to="about"
            className={({isActive})=>
          `${isActive? "text-orange-400" : "text-white"}`}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
            to="service"
            className={({isActive})=>
              `${isActive? "text-orange-400" : "text-white"}`
          }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink 
            to="portfolio"
            className={({isActive})=>
              `${isActive? "text-orange-400" : "text-white"}`
          }
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink 
            to="github"
            className={({isActive})=>
              `${isActive? "text-orange-400" : "text-white"}`
          }
            >
              Github
            </NavLink>
          </li>
          <li>
            <NavLink 
            to="contact"
            className={({isActive})=>
              `${isActive? "text-orange-400" : "text-white"}`
          }
            >
            Contact
            </NavLink>
            </li>
        </ul>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            {/* You can add a hamburger icon here */}
            ☰
          </button>
        </div>
      </nav>
    </header>
        </>
    )
}

export default Header