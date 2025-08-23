import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Hero from "./components/Hero";
import AnimatedShowcase from "./components/AnimatedShowcase";
import Branding from "./components/Branding";
import Webdesign from "./components/Webdesign";
import ProductDesign from "./components/ProductDesign";




const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Hero />
        <Footer />
      </div>
    ),
  },
  {
    path: "/animation",
    element: (
      <div>
        <Navbar />
        <AnimatedShowcase/>
        <Footer />
      </div>
    ),
  },
   {
    path: "/branding",
    element: (
      <div>
        <Navbar />
        <Branding/>
        
        <Footer />
      </div>
    ),
  },
  {
    path: "/webdesign",
    element: (
      <div>
        <Navbar />
        <Webdesign/>
        <Footer />
      </div>
    ),
  },
   {
    path: "/productdesign",
    element: (
      <div>
        <Navbar />
        <ProductDesign/>
        <Footer />
      </div>
    ),
   },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
        <Footer />
      </div>
    ),
  },
  {
    path: "/blog",
    element: (
      <div>
        <Navbar />
        <Blog />
        <Footer />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
