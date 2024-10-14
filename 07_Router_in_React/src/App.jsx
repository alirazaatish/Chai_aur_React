import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Layout from "./Layout";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Contact, {handleCreatUser} from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import User from "./components/User/User";
import Github, {githubLoader} from "./components/Github/Github";
import ErrorPage from "./components/ErrorPage";


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: <Home />
//       },
//       {
//         path: "/about",
//         element: <About />
//       },
//       {
//         path: "/service",
//         element: <Service />
//       },
//       {
//         path: "/contact",
//         element: <Contact />
//       },
//       {
//         path: "/portfolio",
//         element: <Portfolio />
//       }
//     ]
//   }
// ]);


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route  path="" element={<Home />}/>    
      <Route  path="about" element={<About />}/>      
      <Route  path="service" element={<Service />}/>      
      <Route  path="contact" action={handleCreatUser}  element={<Contact />}/>      
      <Route  path="portfolio" element={<Portfolio />}/>      
      <Route  path="user/:userid" element={<User />}/>      
      <Route  path="github" loader={githubLoader} element={<Github />}/>      

    </Route>
  )
)

function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
