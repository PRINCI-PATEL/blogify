import React from "react";
import './App.css'
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Login from "./components/Login";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Blog from "./components/Blog";


const router = createBrowserRouter([
  {
    path: "/",
    element:
    <div>
      <Navbar/>
      <Hero/>
      <Footer/>
      
    </div>
  },
  {
    path: "about",
    element:
    <div>
      <Navbar/>
      <About/>
      <Footer/>
    </div>
  },
  {
    path: "blog",
    element:
    <div>
      <Navbar/>
       <Blog/>
       <Footer/>
    </div>
  },
  {
    path: "login",
    element:
    <div>
      <Navbar/>
       <Login/>
    </div>
  },
 
  {
    path: "signup",
    element:
    <div>
      <Navbar/>
       <SignUp/>
    </div>
  },
 
])


function App() {
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App;
