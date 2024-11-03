import React,{ useState } from 'react'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ResponsiveAppBar from './assets/components/Layout';
import Home from './assets/components/Home';
import About from './assets/components/About';
import SignIn from './assets/components/SignIn';
import SignUp from './assets/components/SignUp';
import Chat from './assets/components/chat';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ResponsiveAppBar />,
    children: [
      {
        path: "/home",
        element : <Home />
      },
      {
        path: "/about",
        element : <About />
      },
      {              
        path: "/signin",
        element: <SignIn />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/chat",
        element: <Chat />
      }
    ]
  },
]);

function App() {

  return (
    <>
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
    </>
  )
}

export default App
