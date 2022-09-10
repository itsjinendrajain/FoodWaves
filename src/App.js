import React, { Fragment } from 'react'

import Category from "./components/CategoryPage"
import Categories from './components/displayCategoryProducts';
import SingleRecipie from './components/singleProducts';
import Footer from "./layouts/Footer"
import Navbar from "./layouts/Navbar"
import 'preline';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Fragment>
      {/* <div>Help</div> */}
      <main className="text-gray-400 bg-black   min-h-screen">
        <Navbar />
      <Routes> 
          // **HomePage 
          {/* *
             --> Latest Meals 
             -->some Categories 
             --> Testimonies 
             --> ContactUs 
             -->
             
          
          */}


          // ** Search page 
        <Route path={ "/category/all" } element={<Category />} />
        <Route path="/category/:name" element={<Categories />} /> 
        <Route path="/recipe/:id" element={< SingleRecipie  />} /> 
        {/* <Route path={ "/category/all" } element={<Products />} /> */}
        

      </Routes>
      <Footer />
      </main>

      {/* <Category /> */}
    </Fragment>
  )
}

export default App