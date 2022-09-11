import React, { Fragment } from 'react'

import Category from "./components/CategoryPage"
import Categories from './components/displayCategoryProducts';
import SingleRecipie from './components/singleProducts';
import AreaWiseProducts from './components/displayAreaProducts';
import IngredientsWiseProducts from "./components/displayIngredientProducts"
import AlphabetWiseProducts from "./components/displayProductsByAlphabatic"
import HomePage from './components/HomePage';
import Footer from "./layouts/Footer"
import Navbar from "./layouts/Navbar"
import 'preline';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DisplaySearchProducts from './components/displaySearchProducts';
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

          <Route path={"/"} element={<HomePage />} />

          // ** Search page
          <Route path={"/area/:name"} element={<AreaWiseProducts />} />
          <Route path={"/search/:name"} element={<DisplaySearchProducts />} />
          <Route path={"/ingredient/:name"} element={<IngredientsWiseProducts />} />
          <Route path={"/alphabet/:name"} element={<AlphabetWiseProducts />} />
          <Route path={"/category/all"} element={<Category />} />
          <Route path="/category/:name" element={<Categories />} />
          <Route path="/recipe/:id" element={< SingleRecipie />} />
          {/* <Route path={ "/category/all" } element={<Products />} /> */}


        </Routes>
        <Footer />
      </main>

      {/* <Category /> */}
    </Fragment>
  )
}

export default App